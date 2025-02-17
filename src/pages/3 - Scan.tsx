import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonModal, IonNote, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidLeave, useIonViewWillEnter } from '@ionic/react';
import './3 - Scan.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useEffect, useRef, useState } from 'react';
import { informationCircleOutline } from 'ionicons/icons';

const Scan: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  useIonViewWillEnter(() => {
    setShowScanner(true);
  });

  useIonViewDidLeave(() => {
    setShowScanner(false);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className='ion-text-center'>Scan Code</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX={false} scrollY={false} ref={page}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <IonText color="light" style={{ flex: '1 1 10%', width: '100%', textAlign: 'center', paddingTop: '1.5em' }}>
            Scan a VerifyYou Code or SMART Health Card
          </IonText>
          <div style={{ flex: '1 1 45%', width: '100%', aspectRatio: 1 / 1 }}>
            {showScanner &&
              <Scanner formats={['qr_code']}
                components={{ zoom: true }}
                styles={{ container: { width: '100%', height: 'auto' }, video: { width: '100%', height: 'auto' } }}
                onScan={(data) => {
                  console.log(data);
                  setData(data[0].rawValue)
                  setIsOpen(true);
                }} />
            }
          </div>
          <div style={{ flex: '1 1 45%', width: '100%', textAlign: 'center', paddingTop: '1.5em' }}>
            <IonNote color="light" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IonIcon icon={informationCircleOutline} style={{ paddingRight: '0.5em' }}></IonIcon>
              Scanning will happen automatically
            </IonNote>
          </div>
        </div>
        <IonModal isOpen={isOpen} presentingElement={presentingElement!} ref={modal}>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              {data}
            </p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Scan;
