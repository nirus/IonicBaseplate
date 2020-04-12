import React from 'react';
import { IonSpinner, IonContent } from '@ionic/react';

const {{pascalcase compName}}: React.FC = () => {
  return (
    <IonContent className={"{{toLowerCase compName}}"}>
      {/*-- Default {{pascalcase compName}} --*/}
      <IonSpinner />
    </IonContent>
  )
};

export default {{pascalcase compName}};
