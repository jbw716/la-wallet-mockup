import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import './2 - Share.css';
import { CSSProperties, useEffect, useState } from 'react';
import ShareQR from './2 - Share pages/2 - ShareQR';
import ShareRemote from './2 - Share pages/2 - ShareRemote';

const Share: React.FC = () => {

  const [segment, setSegment] = useState('verify');

  const contentContainerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100%'
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className='ion-text-center'>Share</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={contentContainerStyle}>

          <IonHeader>
            <IonToolbar color="primary" style={{ flex: '0 0 auto', width: '100%' }}>
              <IonSegment value={segment} onIonChange={e => setSegment(e.detail.value as string)}>
                <IonSegmentButton color="light" value="verify">
                  Verify You
                </IonSegmentButton>
                <IonSegmentButton color="light" value="remote">
                  Remote Verify
                </IonSegmentButton>
              </IonSegment>
            </IonToolbar>
          </IonHeader>

          <div style={{ flex: '1 1 auto', width: '100%', overflow: 'auto' }}>
            {segment === 'verify' ? <ShareQR /> : <ShareRemote />}
          </div>

        </div>
      </IonContent>
    </IonPage >
  );
};

export default Share;
