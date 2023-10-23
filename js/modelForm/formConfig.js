const MIN_LENGTH_FIRSTNAME = 2;
const MAX_LENGTH_FIRSTNAME = 30;
const MIN_LENGTH_LASTNAME = 5;
const MAX_LENGTH_LASTNAME = 50;

export const configForm = {
  firstName: {
    min: MIN_LENGTH_FIRSTNAME,
    max: MAX_LENGTH_FIRSTNAME,
    errorsMessages: {
      required: 'El nombre es requerido',
      minLength: `El nombre debe ser de mínimo ${MIN_LENGTH_FIRSTNAME} caracteres`,
      maxLength: `El nombre debe ser de máximo ${MAX_LENGTH_FIRSTNAME} caracteres`,
    },
  },
  lastName: {
    min: MIN_LENGTH_LASTNAME,
    max: MAX_LENGTH_LASTNAME,
    errorsMessages: {
      required: 'El apellido debe ser requerido',
      minLength: `El apellido debe ser de mínimo ${MIN_LENGTH_LASTNAME} caracteres`,
      maxLength: `El apellido debe ser de máximo ${MAX_LENGTH_LASTNAME} caracteres`,
    },
  },
  email: {
    regexEmail:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorsMessages: {
      required: 'El correo debe ser requerido',
      validEmail: 'Debe de ser un correo válido',
    },
  },
};
