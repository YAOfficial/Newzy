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
} from "@ionic/react";
import { navigateSharp } from "ionicons/icons";
import NavHeader from "../../components/Headers/NavHeader";

const Signup = () => {
  return (
    <IonPage>
      <NavHeader title="Sign" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating ">Username</IonLabel>
          <IonInput name="name" type="text" required></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating ">Email</IonLabel>
          <IonInput name="name" type="text" required></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating ">Password</IonLabel>
          <IonInput name="password" type="password" required></IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Sign Up
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
