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
import EditProfile from "./pages/Auth/EditProfile.js";
import Signup from "./pages/Auth/Signup.js";
import Login from "./pages/Auth/login.js";
import Forgot from "./pages/Auth/forgot.js";
import useAuth from "./hooks/useAuth.js";
import UserContext from "./contents/UserContext.js";
import Link from "./pages/Link";
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
import logo from "./log.png"
/* Theme variables */
import "./theme/variables.css";

const App = () => {
  const [user, setUser] = useAuth();

  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                path=""
                render={() => <Redirect to="/news" />}
                exact={true}
              />
              <Route path="/news" component={News} />
              <Route path="/trending" component={Trending} />
              <Route path="/submit" component={Submit} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/link/:linkId" component={Link} />
              <Route component={() => <Redirect to="/news" />} />
            </IonRouterOutlet>
            <IonTabBar  slot="top">
            <IonTabButton color="primary" tab="tab1" href="/news">
            
            <img  id="logo1"alt="logo" height="100"   src={logo} /> 
                      </IonTabButton>
              <IonTabButton tab="Home" href="Home">
                <IonIcon icon={newspaperOutline} />
                <IonLabel class="ion-text-center ">Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="trending" href="Trending">
                <IonIcon icon={trendingUpOutline} />
                <IonLabel class="ion-text-center "> trending</IonLabel>
              </IonTabButton>

              <IonTabButton tab="search" href="Search">
                <IonIcon icon={searchOutline} />
                <IonLabel class="ion-text-center ">Search</IonLabel>
              </IonTabButton>

              <IonTabButton tab="submit" href="Submit">
                <IonIcon icon={documentTextOutline} />
                <IonLabel class="ion-text-center ">Submit</IonLabel>
              </IonTabButton>

              <IonTabButton tab="profile" href="Profile">
                <IonIcon icon={personOutline} />
                <IonLabel class="ion-text-center ">Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
