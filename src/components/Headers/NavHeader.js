import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonBackButton,
  IonTitle,
  IonButtons,
  IonIcon,
} from "@ionic/react";

const NavHeader = ({ title, option, icon, action }) => {
  return (
    <IonHeader>
      <IonToolbar color="p">
        <IonButton slot="start">
          <IonBackButton defaultHref="/" />
        </IonButton>
        {option && (
          <IonButtons slot="primary">
            <IonButton onClick={action}>
              <IonIcon slot="icon-only" icon={icon}></IonIcon>
            </IonButton>
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavHeader;
