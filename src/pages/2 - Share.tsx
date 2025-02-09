import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './2 - Share.css';
import { useState } from 'react';

const Share: React.FC = () => {

  const [segment, setSegment] = useState('verify');

  function getSegment() {
    switch (segment) {
      case 'verify':
        return 'Verify You';
      case 'remote':
        return 'Remote Verify';
      default:
        return 'Uh oh...s';
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className='ion-text-center'>Share</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar color="primary">
          <IonSegment value={segment} onIonChange={e => setSegment(e.detail.value as string)}>
            <IonSegmentButton color="light" value="verify">
              Verify You
            </IonSegmentButton>
            <IonSegmentButton color="light" value="remote">
              Remote Verify
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <ExploreContainer name={`${getSegment()} page`} />
      </IonContent>
    </IonPage>
  );
};

export default Share;
