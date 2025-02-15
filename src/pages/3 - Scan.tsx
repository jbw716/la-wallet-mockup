import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './3 - Scan.css';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useEffect, useRef, useState } from 'react';

const Scan: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className='ion-text-center'>Scan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Scanner formats={['qr_code']}
          components={{ zoom: true }}
          styles={{ container: { width: '100%', height: 'auto' }, video: { width: '100%', height: 'auto' } }}
          onScan={(data) => {
            console.log(data);
            setData(data[0].rawValue)
            setIsOpen(true);
          }} />
        <IonModal isOpen={isOpen} presentingElement={presentingElement!} ref={modal}>
          <IonHeader>
            <IonToolbar>
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
