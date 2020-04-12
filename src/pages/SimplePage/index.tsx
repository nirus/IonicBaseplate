import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injector from 'src/baseplate/injectorWrap';
import { makeSelectCounter, makeSelectAjaxMsg } from './selectors';
import { incrementAction, getSimpleAjax } from './actions';
import React, { memo, useState } from 'react';
import style from './style.module.scss';
import { NameSpace } from './constants';
import reducer from './reducer';
import saga from './saga';
import { InferMappedProps, SubState } from './types';
import { fetchSimpleApi } from './fetchapi';

const SimplePage: React.FC<InferMappedProps> = ({ eProps, ...props }: InferMappedProps) => {

  /** 
   * Direct method implementation without SAGA 
   * This was to show you dont need to put everything to global state 
   * incoming from Server API calls. Maintain a local state.
  */
  const [msg, setMsg] = useState('');
  const simpleAjaxDirect = async ()=>{
    const msg = await fetchSimpleApi() as string;
    setMsg(msg);
  }

  return (
    <IonPage className={style["simple-page-module"]}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BasePlate Capability</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>Redux data flow</IonCardSubtitle>
            <IonCardTitle className={style['counter']}>{props.counter}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton
              expand="full"
              onClick={() => eProps.onCount({ counter: props.counter + 1 })}
              color="primary">Increment Counter</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Redux - Saga data flow</IonCardSubtitle>
          <IonCardTitle className={style['simple-resp']}>{props.msg}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton
            expand="full"
            onClick={() => eProps.onSimpleAjax()}
            color="primary">Fetch Response</IonButton>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Direct Ajax data flow</IonCardSubtitle>
          <IonCardTitle className={style['simple-resp']}>{msg}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonButton
            expand="full"
            onClick={() => simpleAjaxDirect()}
            color="primary">Fetch Response</IonButton>
        </IonCardContent>
      </IonCard>

      </IonContent>
    </IonPage>
  );
};

/** @returns {object} Contains state props from selectors */
export const mapStateToProps = createStructuredSelector<SubState, SubState>({
  counter: makeSelectCounter(),
  msg: makeSelectAjaxMsg()
});

/** @returns {object} Contains dispatchable props */
export function mapDispatchToProps(dispatch: any) {
  return {
    eProps: { // eProps - Emitter proptypes thats binds to dispatch
      /** dispatch for counter to increment */
      onCount: (count: { counter: number }) => dispatch(incrementAction(count)),
      onSimpleAjax: () => dispatch(getSimpleAjax())
    }
  };
}

/**
 * Injects prop and saga bindings done via
 * useInjectReducer & useInjectSaga
 */
const withInjectedMode = injector(
  SimplePage,
  {
    key: NameSpace,
    reducer,
    saga
  }
);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withInjectedMode) as React.ComponentType<InferMappedProps>;

// export default Tab1;
