import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import News from "srcpagesTabs\news.js";
import Profile from "srcpagesTabsprofile.js";
import Search from "srcpagesTabsSearch.js";
import Submit from "srcpagesTabsSubmit.js";
import Trending from "srcpagesTabsTrending.js";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/" render={() => <Redirect to="/news" />} exact={true} />
          <Route path="/news" component={News} />
          <Route path="/trending" component={trending} />
          <Route path="/submit" component={submit} />
          <Route path="/search" component={search} />
          <Route path="/profile" component={profile} />
          <Route component={() => <Redirect to="/news" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="news" href="src\pages\Tabs\news.js">
            <IonIcon icon="public\assets\icon\favicon.png" />
            <IonLabel> Newz</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
