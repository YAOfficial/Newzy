import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const SmallHeader = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle size="Large"> {title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default SmallHeader;
