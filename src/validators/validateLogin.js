export default function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "your email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "your email is invalid";
  }

  if (!values.password) {
    errors.password = "a password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Your password must be at least 6 characters. ";
  }

  return errors;
}
