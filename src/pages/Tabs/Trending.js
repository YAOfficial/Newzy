import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";
import LinkList from "../../components/Link/LinkList";
const Trending = (props) => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <LinkList sizeXl="6" sizeLg="6" sizeMd="9" sizeSm="12" pushXl="3" pushLg="3" pushMd="2" location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Trending;
