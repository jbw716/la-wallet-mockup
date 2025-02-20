import './2 - ShareRemote.css';
import { IonButton, IonIcon, IonInput, IonItem, IonList, IonText } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';
import { useState } from 'react';

const ShareRemote: React.FC = () => {
  const [code, setCode] = useState<string | null | undefined>();

  return (
    <IonList lines="none" style={{ position: 'absolute', top: '20%' }}>
      <IonItem lines="none">
        <IonIcon icon={informationCircle} slot="start" color="light" style={{ margin: '0 1em 0 0' }}></IonIcon>
        <IonText color="light">
          Enter the Verify You code the requester has provided to verify your identity remotely.
        </IonText>
      </IonItem>
      <IonItem>
        {/* <IonCard style={{ width: '100%' }}>
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>
              Remote Verify You Code
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ padding: '1em' }}>
            <IonInput placeholder="Enter Verify You Code" clearOnEdit={true} fill="solid" style={{ fontSize: 'x-large', textAlign: 'center' }} maxlength={4} minlength={4} />
          </IonCardContent>
        </IonCard> */}

        <IonInput placeholder="Enter Verify You Code" clearOnEdit={true} color="light" fill="outline" style={{ fontSize: 'x-large', textAlign: 'center', color: 'var(--ion-color-light)' }} maxlength={4} minlength={4} onIonInput={input => setCode(input.detail.value)} />
      </IonItem>
      <IonButton color="light" style={{ width: '100%', padding: '2em', margin: 0 }} disabled={!code || code.length < 4}>
        Submit
      </IonButton>
    </IonList>
  );
};

export default ShareRemote;
