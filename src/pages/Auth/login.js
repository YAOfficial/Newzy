import React from "react";
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import { navigateSharp } from "ionicons/icons";
import NavHeader from "../../components/Headers/NavHeader";

const Login = () => {
  return (
    <IonPage>
      <NavHeader title="Log in" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating ">Email</IonLabel>
          <IonInput name="email" type="text" required></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating ">Password</IonLabel>
          <IonInput name="password" type="password" required></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Log in
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="ion-text-center ion-padding-vertical">
            <IonRouterLink routerLink={"/forgot"}>
              Forgot your password ??
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;
