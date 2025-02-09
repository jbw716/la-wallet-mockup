import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import './2 - Share.css';
import { CSSProperties, useEffect, useState } from 'react';
import { informationCircle } from 'ionicons/icons';
import { QRCode } from 'react-qrcode-logo';

const Share: React.FC = () => {

  const [segment, setSegment] = useState('verify');
  const [qrValue, setQrValue] = useState(crypto.randomUUID());

  useEffect(() => {
    const timerId = setInterval(() => setQrValue(crypto.randomUUID()), 1000);
    return () => clearInterval(timerId);
  });

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
      <IonContent style={contentContainerStyle}>
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
        <div>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle style={{ textAlign: 'center' }}>
                To use Verify You, present the below QR code for scanning.
                Select whether you would like to share you name, and, and/or driver's license number.
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <IonIcon icon={informationCircle}></IonIcon>&nbsp; What is Verify You?
                </div>
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <div style={{ position: 'relative', height: '200px' }}>
                <IonImg src='assets/img/face.png' style={{ left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', 'object-fit': 'cover', position: 'absolute' }}></IonImg>
                <QRCode value={qrValue} size={200} ecLevel='H' qrStyle='dots' bgColor='transparent' style={{ left: '50%', top: '-10px', transform: 'translateX(-50%)', position: 'absolute' }}></QRCode>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Share;
