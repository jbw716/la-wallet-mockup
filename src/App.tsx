import { Redirect, Route } from 'react-router-dom';
import {
  IonAlert,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  isPlatform,
  getPlatforms
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, share, scan, menu } from 'ionicons/icons';
import Home from './pages/1 - Home';
import Share from './pages/2 - Share';
import Scan from './pages/3 - Scan';
import Menu from './pages/4 - Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact({
  innerHTMLTemplatesEnabled: true
});

const App: React.FC = () => (
  <>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/share">
              <Share />
            </Route>
            <Route path="/scan">
              <Scan />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom" color="primary">
            <IonTabButton tab="home" href="/home">
              <IonIcon aria-hidden="true" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="share" href="/share">
              <IonIcon aria-hidden="true" icon={share} />
              <IonLabel>Share</IonLabel>
            </IonTabButton>
            <IonTabButton tab="scan" href="/scan">
              <IonIcon aria-hidden="true" icon={scan} />
              <IonLabel>Scan</IonLabel>
            </IonTabButton>
            <IonTabButton tab="menu" href="/menu">
              <IonIcon aria-hidden="true" icon={menu} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
    <IonAlert isOpen={!isPlatform('android') && !isPlatform('ios')}
      header='Warning'
      message='This application is created and styled for mobile devices.<br />Please view on a mobile device for the best experience.'
      buttons={['Dismiss']} />
  </>
);

export default App;
