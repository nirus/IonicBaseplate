import invariant from 'invariant';
import { isEmpty, isFunction, isString, conformsTo } from 'lodash';

import checkStore, { StoreParameters } from './checkStore';
import { APP_EVENTS } from './constants';

interface Descriptor { mode?: APP_EVENTS, saga?: ()=> void }

const allowedModes = [APP_EVENTS.RESTART_ON_REMOUNT, APP_EVENTS.DAEMON, APP_EVENTS.ONCE_TILL_UNMOUNT];

const checkKey = (key: any) =>
  invariant(
    isString(key) && !isEmpty(key),
    '(src/common...) injectSaga: Expected `key` to be a non empty string',
  );

const checkDescriptor = (descriptor: Descriptor) => {
  const shape = {
    saga: isFunction,
    mode: (mode: APP_EVENTS) => isString(mode) && allowedModes.includes(mode),
  };
  invariant(
    conformsTo(descriptor, shape),
    '(src/common...) injectSaga: Expected a valid saga descriptor',
  );
};

export function injectSagaFactory(store: StoreParameters, isValid: boolean) {
  return function injectSaga(key: string, descriptor : Descriptor = {}, args: any) {
    if (!isValid) checkStore(store);

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || APP_EVENTS.DAEMON,
    };
    const { saga, mode } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== 'production') {
      const oldDescriptor = store.injectedSagas[key];
      // enable hot reloading of daemon and once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (hasSaga && mode !== APP_EVENTS.DAEMON && mode !== APP_EVENTS.ONCE_TILL_UNMOUNT)
    ) {
      /* eslint-disable no-param-reassign */
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
      /* eslint-enable no-param-reassign */
    }
  };
}

export function ejectSagaFactory(store: StoreParameters, isValid: boolean) {
  return function ejectSaga(key: string) {
    if (!isValid) checkStore(store);

    checkKey(key);

    if (Reflect.has(store.injectedSagas, key)) {
      const descriptor = store.injectedSagas[key];
      if (descriptor.mode && descriptor.mode !== APP_EVENTS.DAEMON) {
        descriptor.task.cancel();
        // Clean up in production; in development we need `descriptor.saga` for hot reloading
        if (process.env.NODE_ENV === 'production') {
          // Need some value to be able to detect `ONCE_TILL_UNMOUNT` sagas in `injectSaga`
          store.injectedSagas[key] = 'done'; // eslint-disable-line no-param-reassign
        }
      }
    }
  };
}

export default function getInjectors(store: StoreParameters){
  checkStore(store);

  return {
    injectSaga: injectSagaFactory(store, true),
    ejectSaga: ejectSagaFactory(store, true),
  };
}
