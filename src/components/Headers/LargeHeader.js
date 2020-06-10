import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const LargeHeader = ({ title }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar color="success">
        <IonTitle size="Large"> News</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default LargeHeader;
