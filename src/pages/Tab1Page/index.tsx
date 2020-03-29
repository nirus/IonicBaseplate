import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injector from 'src/common/injectorWrap';
import { makeSelectCounter, makeSelectCountries } from './selectors';
import { incrementAction, getCountriesAction } from './actions';

import { star } from 'ionicons/icons';
import React, { memo } from 'react';
import './Tab1.css';
import scss from './style.module.scss';
import { NameSpace } from './constants';
import tab1Reducer from './reducer';
import tab1Saga from './saga';
import { InferMappedProps } from './types';

const Tab1: React.FC<InferMappedProps> = ({ eProps, ...props }: InferMappedProps) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Redux Capability</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Baseplate Framework</IonCardTitle>
            <IonCardSubtitle>Ionic + React + Redux + Saga</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle className={scss['scss-test']}>Redux data flow showcase</IonCardSubtitle>
            <IonCardTitle>{props.counter}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton
              expand="full"
              onClick={() => eProps.onCount({ counter: props.counter + 1 })}
              color="primary">Click to Count</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardSubtitle>Redux-Saga data flow showcase</IonCardSubtitle>
            <IonButton
              expand="full"
              onClick={() => eProps.getAllCountries()}
              color="primary">Load Countries</IonButton>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="none">
              <IonListHeader>List of Countries</IonListHeader>                       
                {
                  Object.entries(props.countries)
                    .map(([, value], index) => (
                      <IonItem key={index} href="https://ionicframework.com/docs/" target="_blank">
                        <IonIcon slot="start" color="medium" icon={star} />
                        <IonLabel>{value as string}</IonLabel>
                      </IonItem>
                    ))
                }
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

/** @returns {object} Contains props from selectors */
export const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
  countries: makeSelectCountries(),
});

/** @returns {object} Contains dispatchable props */
export function mapDispatchToProps(dispatch: any) {
  return {
    eProps: { // eProps - Emitter proptypes thats binds to dispatch
      /** dispatch for counter to increment */
      onCount: (count: { counter: number }) => dispatch(incrementAction(count)),
      /** dispatch for get all countries */
      getAllCountries: () => dispatch(getCountriesAction())
    }
  };
}

/**
 * Injects prop and saga bindings done via
 * useInjectReducer & useInjectSaga
 */
const withInjectedMode = injector(
  Tab1,
  {
    key: NameSpace,
    reducer: tab1Reducer,
    saga: tab1Saga
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
