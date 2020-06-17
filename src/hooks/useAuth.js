import React from "react";

import firebase from "../firebase";
import firebaseConfig from "../firebase/config";

function useAuth() {
  const [authUser, setAuthUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, {});
  return authUser, setAuthUser;
}
