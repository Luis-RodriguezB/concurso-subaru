const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  required: (value) => value.trim().length === 0,
  max: (value, max) => value.length > max,
  min: (value, min) => value.length < min,
  email: (value) => !EMAIL_REGEX.test(value),
}
