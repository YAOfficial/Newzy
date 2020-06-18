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
  IonLoading,
} from "@ionic/react";

import NavHeader from "../../components/Headers/NavHeader";
import validatePasswordReset from "../../validators/validatePasswordReset";
import { toast } from "../../helpers/toast";
import useForm from "../../hooks/userForm";

import firebase from "../../firebase/firebase";
const INITIAL_STATE = {
  email: "",
};

const Forgot = (props) => {
  const { handleSubmit, handleChange, values, isSubmitting } = useForm(
    INITIAL_STATE,
    validatePasswordReset,
    handleresetpassword
  );
  const [busy, setBusy] = React.useState(false);

  async function handleresetpassword() {
    setBusy(true);
    const { email } = values;
    try {
      await firebase.resetPassword(email);
      toast("Check your email to reset your password");
      props.history.push("/");
    } catch (err) {
      console.error("Password Reset Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <NavHeader title="Password Reset" />
      <IonLoading message={"verifying loadState"} isOpen={busy} />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating ">Email</IonLabel>
          <IonInput
            name="email"
            type="text"
            value={values.email}
            onionchange={handleChange}
            required
          ></IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              onClick={handleSubmit}
              disabled={isSubmitting}
              expand="block"
            >
              Get the reset link
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Forgot;
