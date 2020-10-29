import React from "react";
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCol, IonCardSubtitle } from "@ionic/react";
import SmallHeader from "../../components/Headers/SmallHeader";
import LargeHeader from "../../components/Headers/LargeHeader";
import LinkList from "../../components/Link/LinkList";
const News = (props) => {
  return (
    <IonPage>
     
      <IonContent fullscreen>
      <IonCol id="infoTab"  sizeSm="12" size="0"> 
          <IonCard  button  mode="ios">
          <IonCardHeader >
            
            <IonCardTitle >Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent mode="ios" color="dark">
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>
        </IonCol>
     
        <LinkList  location={props.location} />
       
      </IonContent>
    </IonPage>
  );
};

export default News;
