export default function validateEditProfile(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "A username is Required";
  }

  if (!values.email) {
    errors.email = "your email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "your email is invalid";
  }

  if (!values.currentPassword) {
    errors.currentPassword = "Your current password is Required";
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword =
      "Your Current password must be at least 6 characters. ";
  }
  if (!values.newPassword < 6) {
    errors.password = "Your New password must be at least 6 characters";
  }
  return errors;
}
