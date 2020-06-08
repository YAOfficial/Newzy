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

import {
  newspaperOutline,
  trendingUpOutline,
  searchOutline,
  documentTextOutline,
  personOutline,
} from "ionicons/icons";

import { IonReactRouter } from "@ionic/react-router";
import News from "./pages/Tabs/news";
import Profile from "./pages/Tabs/profile";
import Search from "./pages/Tabs/Search";
import Submit from "./pages/Tabs/Submit";
import Trending from "./pages/Tabs/Trending";

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
          <Route path="" render={() => <Redirect to="/news" />} exact={true} />
          <Route path="/news" component={News} />
          <Route path="/trending" component={Trending} />
          <Route path="/submit" component={Submit} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route component={() => <Redirect to="/news" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="Home">
            <IonIcon icon={newspaperOutline} />
            <IonLabel id="a1"> Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trending" href="Trending">
            <IonIcon icon={trendingUpOutline} />
            <IonLabel id="a1"> trending</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="Search">
            <IonIcon icon={searchOutline} />
            <IonLabel id="a1">Search</IonLabel>
          </IonTabButton>

          <IonTabButton tab="submit" href="Submit">
            <IonIcon icon={documentTextOutline} />
            <IonLabel id="a1">Submit</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="Profile">
            <IonIcon icon={personOutline} />
            <IonLabel id="a1">Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
