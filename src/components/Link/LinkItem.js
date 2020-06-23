import React from "react";
import {
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonBadge,
  IonLabel,
  IonText,
  IonIcon,
} from "@ionic/react";
import {
  linkOutline,
  chevronUpCircleOutline,
  personOutline,
  chatbubbleEllipsesOutline,
  timeOutline,
} from "ionicons/icons";
import { getHostName } from "../../helpers/domain";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
const LinkItem = ({ link, index, showCount, url, browser }) => {
  return (
    <IonCard routerLink={url} onClick={browser} button>
      <IonCardContent class="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonBadge
              style={{
                verticalAlign: "middle",
              }}
              slot="start"
            >
              {showCount && index}
            </IonBadge>
            <IonLabel>
              <p
                style={{
                  alignItem: "center",
                  fontSize: "0,5rem",
                  fontWeight: "normal",
                }}
              >
                <IonItem
                  icon={linkOutline}
                  style={{
                    verticalAlign: "middle",
                  }}
                />

                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {getHostName(link.url)}
                </IonText>
              </p>
              <div className="ion-padding-vertical ion-text-wrap">
                <strong
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {link.description}
                </strong>
              </div>
              <p
                style={{
                  alignItems: "center",
                  fontSize: "0.8rem",
                  fontWeight: "normal",
                }}
              >
                <IonIcon
                  icon={chevronUpCircleOutline}
                  style={{
                    verticalAlign: "middle",
                    padding: "1vw",
                  }}
                />{" "}
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {link.voteCount} likes
                </IonText>
                <IonText style={{ fontSize: "1.3rem", padding: "1vw" }}>
                  {" "}
                  |{" "}
                </IonText>
                <IonIcon
                  icon={personOutline}
                  style={{
                    verticalAlign: "middle",
                    padding: "1vw",
                  }}
                />{" "}
                <IonText style={{ verticalAlign: "middle" }}>
                  {link.postedBy.name}
                </IonText>
                <IonText style={{ fontSize: "1.3rem", paddingLeft: "2vw" }}>
                  {" "}
                  |{" "}
                </IonText>
                <IonIcon
                  icon={timeOutline}
                  style={{
                    verticalAlign: "middle",
                    padding: "1vw",
                  }}
                />
                <IonText
                  style={{
                    verticalAlign: "middle",
                  }}
                >
                  {formatDistanceToNow(link.created)}
                </IonText>
                {link.comments.length > 0 && (
                  <>
                    <IonText style={{ fontSize: "1.3rem", padding: "1vw" }}>
                      {" "}
                      |{" "}
                    </IonText>
                    <IonIcon
                      icon={chatbubbleEllipsesOutline}
                      style={{
                        verticalAlign: "middle",
                      }}
                    />
                    <IonText style={{ fontSize: "1.3rem", padding: "1vw" }}>
                      {" "}
                      |{" "}
                    </IonText>
                    <IonText
                      style={{
                        verticalAlign: "middle",
                      }}
                    >
                      {link.comments.length} comments
                    </IonText>
                  </>
                )}
              </p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export default LinkItem;
