import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

const NavHeader = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButton>
          <IonBackButton defaultHref="/" />
        </IonButton>
        <IonTitle>(title)</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavHeader;
