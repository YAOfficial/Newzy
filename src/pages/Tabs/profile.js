import React from "react";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRow,
  IonCol,
  IonButton,
  IonGrid,
} from "@ionic/react";
import { mailOutline, personCircleOutline } from "ionicons/icons";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";
import { toast } from "../../helpers/toast";
import firebase from "../../firebase";
import UserContext from "../../contents/UserContext.js";

const Profile = (props) => {
  const { user } = React.useContext(UserContext);

  async function logoutUser() {
    try {
      await firebase.logout();
      props.history.push("/");
      toast("you have logged out succesfully");
    } catch (err) {
      console.error("Logout Error", err);
      toast(err.message);
    }
  }
  return (
    <IonPage>
    
      <IonContent fullscreen>
       
        {user ? (
          <>
            <IonCard>
              <IonCardContent>
                <IonList lines="none">
                  <IonItem>
                    <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong> {user.displayName}</strong>
                      <p> Username</p>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonIcon icon={mailOutline} slot="start"></IonIcon>
                    <IonLabel>
                      <strong> {user.email}</strong>
                      <p>Email</p>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  routerLink={"/edit-profile"}
                  color="primary"
                  fill="outline"
                >
                  Edit Profile
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  onClick={logoutUser}
                  color="primary"
                  fill="outline"
                >
                  Log Out
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  //eslint-disable-next-line
                  onclick="javascript:location.href='https://yusuf.is-a.dev'"
                  color="primary"
                  fill="outline"
                >
                  Visit my site for more projects
                </IonButton>
              </IonCol>
            </IonRow>
          </>
        ) : (
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                 id="buttons"
                  expand="block"
                  routerLink={"./register"}
                  color="primary"
                >
                  Sign Up
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                id="buttons"
                  expand="block"
                  routerLink={"./Login"}
                  color="primary"
                
                >
                  Log In
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="block"
                  id="buttons"
                  //eslint-disable-next-line
                  onclick="javascript:location.href='https://yusuf.is-a.dev'"
                  color="primary"
                  fill="outline"
                >
                  Visit my site for more projects
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
