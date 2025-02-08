import './1 - Home.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { IonContent, IonHeader, IonPage, IonToolbar, IonImg, IonItem, IonLabel, IonList, IonButton, IonIcon } from '@ionic/react';
import { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { call, chatbubble, globe } from 'ionicons/icons';

const verticalCenterStyle: CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonImg style={{ height: '45px' }} src="assets/img/Louisiana-Wallet-Horizontal-retina-logo.png" />
        </IonToolbar>
      </IonHeader>
      <IonContent scrollX={false} scrollY={false} style={{ overflow: 'hidden' }}>
        <IonList>
          <IonItem lines="none">
            <IonLabel slot="start">National Suicide and Crisis Lifeline</IonLabel>
            <span slot="end">
              <IonButton fill="clear" size="large">
                <IonIcon slot="icon-only" icon={chatbubble}></IonIcon>
              </IonButton>
              <IonButton fill="clear" size="large">
                <IonIcon slot="icon-only" icon={call}></IonIcon>
              </IonButton>
              <IonButton fill="clear" size="large">
                <IonIcon slot="icon-only" icon={globe}></IonIcon>
              </IonButton>
            </span>
          </IonItem>
        </IonList>
        <div style={verticalCenterStyle}>
          <Swiper
            style={{ marginTop: '-25%', height: '50%' }}
            direction='vertical'
            slidesPerView={1}
            spaceBetween={30}
            modules={[EffectCards]}
            effect={'cards'}
          >
            <SwiperSlide style={verticalCenterStyle}>
              <img src='assets/img/license.png' />
            </SwiperSlide>
            <SwiperSlide style={verticalCenterStyle}>
              <img src='assets/img/CarRegistration.jpg' />
            </SwiperSlide>
            <SwiperSlide style={verticalCenterStyle}>
              <img src='assets/img/ConcealedHandgun.jpg' />
            </SwiperSlide>
            <SwiperSlide style={verticalCenterStyle}>
              <img src='assets/img/LDFW.jpg' />
            </SwiperSlide>
            <SwiperSlide style={verticalCenterStyle}>
              <img src='assets/img/Medicaid.jpg' />
            </SwiperSlide>
            <SwiperSlide style={verticalCenterStyle}>
              <img src='assets/img/SMARTHealth.jpg' />
            </SwiperSlide>
          </Swiper>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
