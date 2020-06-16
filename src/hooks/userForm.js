import React from "react";
import { toast } from "../helpers/toast";

function useForm(intialState, validate, action) {
  const [values, setValues] = React.useState(intialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        action();
        setValues(intialState);
        setSubmitting(false);
      } else {
        toast(Object.values(errors).join(" "));
        setSubmitting(false);
      }
    }
  }, [errors]);
  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }
  function handleSubmit() {
    const validationErrors = validate(values);

    setErrors(validationErrors);
    setSubmitting(true);
  }
  return { handleSubmit, handleChange, values, setValues, isSubmitting };
}

export default useForm;
