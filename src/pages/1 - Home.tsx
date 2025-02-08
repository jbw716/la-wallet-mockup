import './1 - Home.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { IonContent, IonHeader, IonPage, IonToolbar, IonImg, IonItem, IonLabel, IonList, IonButton, IonIcon } from '@ionic/react';
import { CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Mousewheel } from 'swiper/modules';
// import { EffectCards } from 'swiper/modules';
import { call, chatbubble, globe } from 'ionicons/icons';

const verticalCenterStyle: CSSProperties = {
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
        <div style={{ ...verticalCenterStyle, height: '100%' }}>
          <IonList style={{ flex: '0 0 auto', width: '100%' }}>
            <IonItem>
              <IonLabel color="light">National Suicide<br />and Crisis Lifeline</IonLabel>
              <span slot="end">
                <IonButton fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={chatbubble} color="light"></IonIcon>
                </IonButton>
                <IonButton fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={call} color="light"></IonIcon>
                </IonButton>
                <IonButton fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={globe} color="light"></IonIcon>
                </IonButton>
              </span>
            </IonItem>
            <IonItem>
              <IonLabel color="light">Report Human Trafficking</IonLabel>
              <span slot="end">
                <IonButton fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={call} color="light"></IonIcon>
                </IonButton>
                <IonButton fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={globe} color="light"></IonIcon>
                </IonButton>
              </span>
            </IonItem>
            <IonItem>
              <IonLabel color="light">Louisiana Child<br />Abuse/Neglect Hotline</IonLabel>
              <span slot="end">
                <IonButton fill="clear" size="large">
                  <IonIcon slot="icon-only" icon={call} color="light"></IonIcon>
                </IonButton>
              </span>
            </IonItem>
          </IonList>
          <div style={{ flex: '1 1 100%', overflow: 'hidden', height: '100%', padding: '0 10px' }}>
            <Swiper
              style={{ translate: '0 -15%', height: '120%' }}
              modules={[EffectCoverflow, Mousewheel]}
              effect={'coverflow'}
              coverflowEffect={{
                // rotate: 0
              }}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              direction='vertical'
              spaceBetween={-150}
              mousewheel={true}
            >
              <SwiperSlide style={{ ...verticalCenterStyle, height: '300px' }}>
                <img src='assets/img/license.png' />
              </SwiperSlide>
              <SwiperSlide style={{ ...verticalCenterStyle, height: '300px' }}>
                <img src='assets/img/CarRegistration.jpg' />
              </SwiperSlide>
              <SwiperSlide style={{ ...verticalCenterStyle, height: '300px' }}>
                <img src='assets/img/ConcealedHandgun.jpg' />
              </SwiperSlide>
              <SwiperSlide style={{ ...verticalCenterStyle, height: '300px' }}>
                <img src='assets/img/LDFW.jpg' />
              </SwiperSlide>
              <SwiperSlide style={{ ...verticalCenterStyle, height: '300px' }}>
                <img src='assets/img/Medicaid.jpg' />
              </SwiperSlide>
              <SwiperSlide style={{ ...verticalCenterStyle, height: '300px' }}>
                <img src='assets/img/SMARTHealth.jpg' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
