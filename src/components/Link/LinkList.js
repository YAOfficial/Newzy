import React from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

const LinkList = (props) => {
  const [links, setLinks] = React.useState([]);
  const isTrending = props.locataion.pathname.includes("trending");
  React.useEffect(() => {
    const unsubscribe = getLinks();
    return () => unsubscribe();
    // eslint-disable-next-line
  }, [isTrending]);

  function getLinks() {
    if (isTrending) {
      return firebase.db
        .collection("links")
        .orderBy("voteCount", "desc")
        .onSnapshot(handleSnapShot);
    }
    return firebase.db
      .collection("links")
      .orderBy("created", "desc")
      .onSnapshot(handleSnapShot);
  }

  function handleSnapShot() {
    const links = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setLinks(links);
  }

  return (
    <>
      {links.map((link, index) => {
        <LinkItem key={link.id} />;
      })}
    </>
  );
};

export default LinkList;
