import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCheckbox, IonIcon, IonImg, IonItem, IonLabel, IonList, IonNote, IonText } from '@ionic/react';
// import './2 - Share.css';
import { useEffect, useState } from 'react';
import { informationCircle } from 'ionicons/icons';
import { QRCode } from 'react-qrcode-logo';

const ShareQR: React.FC = () => {

  const [qrValue, setQrValue] = useState(crypto.randomUUID());

  useEffect(() => {
    const timerId = setInterval(() => setQrValue(crypto.randomUUID()), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <IonList>
      <IonCard style={{ marginBottom: '10px' }}>
        <IonCardHeader style={{ border: 'none' }}>
          <IonCardSubtitle style={{ textAlign: 'center' }}>
            To use Verify You,<br />present the below QR code for scanning.
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <IonIcon icon={informationCircle}></IonIcon>&nbsp; What is Verify You?
            </div>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <div style={{ position: 'relative', height: '220px' }}>
            <IonImg src='assets/img/face.png' style={{ left: '50%', transform: 'translateX(-50%)', width: '200px', height: '200px', 'object-fit': 'cover', position: 'absolute' }}></IonImg>
            <QRCode value={qrValue} size={200} ecLevel='H' qrStyle='dots' bgColor='transparent' style={{ left: '50%', top: '-10px', transform: 'translateX(-50%)', position: 'absolute' }}></QRCode>
          </div>
        </IonCardContent>
      </IonCard>
      <IonItem lines="none" style={{ paddingTop: '0.5em' }}>
        <IonIcon icon={informationCircle} slot="start" color="light" style={{ margin: '0 1em 0 0' }}></IonIcon>
        <IonText color="light">
          Select whether you would like to share you name, and, and/or driver's license number.
          <br />
          * <IonNote color="light">Portrait and status information are required.</IonNote>
        </IonText>
      </IonItem>
      {/* <IonNote color="light" style={{ marginLeft: '4em' }}>* Portrait and status information are required.</IonNote> */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IonCard style={{ flex: '1 1 50%' }}>
          <IonCardHeader>
            <IonCardSubtitle>
              My Portrait
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>
                <strong>Yes</strong>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard style={{ flex: '1 1 50%' }}>
          <IonCardHeader>
            <IonCardSubtitle>
              License Status
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel>
                <strong>Valid</strong>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </div>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            Age
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel>
              <strong>Over 25</strong>
            </IonLabel>
            <IonCheckbox slot="end" checked={true}></IonCheckbox>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            Name
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel>
              <strong>John Envoc Doe</strong>
            </IonLabel>
            <IonCheckbox slot="end" checked={true}></IonCheckbox>
          </IonItem>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>
            License Number
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel>
              <strong>999999996</strong>
            </IonLabel>
            <IonCheckbox slot="end" checked={true}></IonCheckbox>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </IonList>
  );
};

export default ShareQR;
