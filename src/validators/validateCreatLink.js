export default function validateCreatLink(values) {
  let errors = {};

  if (!values.description) {
    errors.description = "A description is Required";
  } else if (values.description.length < 10) {
    errors.description = "The description must be at least 10 characteers";
  }

  if (!values.url) {
    errors.url = "a url is Required";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "The url must Be Valid. ";
  }

  return errors;
}
