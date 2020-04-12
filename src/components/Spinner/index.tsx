import React from 'react';
import { IonSpinner, IonContent } from '@ionic/react';

const Spinner: React.FC = () => {
  return (
    <IonContent>
      {/*-- Default Spinner --*/}
      <IonSpinner />
    </IonContent>
  )
};

export default Spinner;
