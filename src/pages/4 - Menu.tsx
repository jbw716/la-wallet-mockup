import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './4 - Menu.css';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className='ion-text-center'>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Menu page" />
      </IonContent>
    </IonPage>
  );
};

export default Menu;
