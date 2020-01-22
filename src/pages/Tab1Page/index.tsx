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
import { useInjectReducer } from 'src/common/injectReducer';
// import { useInjectSaga } from 'src/common/injectSaga';
import { makeSelectCounter } from './selectors';
import { incrementAction } from './actions';

import { book, build, colorFill, grid } from 'ionicons/icons';
import React, { memo } from 'react';
import './Tab1.css';
import './style.scss';
import { PAGE_NAME } from './constants';
import reducer from './reducer';
import { SubState, InferMappedProps } from './types';

const Tab1: React.FC<InferMappedProps> = (props: InferMappedProps) => {
  useInjectReducer({ key: PAGE_NAME, reducer: reducer });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Get Started</IonCardSubtitle>
            <IonCardTitle>Welcome to Ionic React + Redux</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p className={'scss-test'}>
              This is a sample app to demonstrate the Redux integrated with the Ionic app
            </p>
            <p>{props.counter} </p>
            <div>
              <IonButton expand="full" onClick={() => props.onCount({ counter: props.counter + 1 })} color="primary">Count</IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Resources</IonLabel>
          </IonListHeader>
          <IonItem href="https://ionicframework.com/docs/" target="_blank">
            <IonIcon slot="start" color="medium" icon={book} />
            <IonLabel>Ionic Documentation</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={build} />
            <IonLabel>Scaffold Out Your App</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/layout/structure" target="_blank">
            <IonIcon slot="start" color="medium" icon={grid} />
            <IonLabel>Change Your App Layout</IonLabel>
          </IonItem>
          <IonItem href="https://ionicframework.com/docs/theming/basics" target="_blank">
            <IonIcon slot="start" color="medium" icon={colorFill} />
            <IonLabel>Theme Your App</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
});

export function mapDispatchToProps(dispatch: any) {
  return {
    onCount: (count: SubState) => dispatch(incrementAction(count)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Tab1) as React.ComponentType<InferMappedProps>;

// export default Tab1;
