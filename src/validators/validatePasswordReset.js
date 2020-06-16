export default function validatePasswordReset(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "your email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "your email is invalid";
  }

  return errors;
}
