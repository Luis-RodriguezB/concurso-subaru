const MIN_LENGTH_FIRSTNAME = 2;
const MAX_LENGTH_FIRSTNAME = 30;
const MIN_LENGTH_LASTNAME = 5;
const MAX_LENGTH_LASTNAME = 50;

export const configForm = {
  firstName: {
    required: true,
    min: MIN_LENGTH_FIRSTNAME,
    max: MAX_LENGTH_FIRSTNAME,
  },
  lastName: {
    required: true,
    min: MIN_LENGTH_LASTNAME,
    max: MAX_LENGTH_LASTNAME,
  },
  email: {
    required: true,
    email: true,
  },
};

export const inputErrorMessages = {
  firstName: {
    required: 'El nombre es requerido',
    min: `El nombre debe ser de mínimo ${MIN_LENGTH_FIRSTNAME} caracteres`,
    max: `El nombre debe ser de máximo ${MAX_LENGTH_FIRSTNAME} caracteres`,
  },
  lastName: {
    required: 'El apellido debe ser requerido',
    min: `El apellido debe ser de mínimo ${MIN_LENGTH_LASTNAME} caracteres`,
    max: `El apellido debe ser de máximo ${MAX_LENGTH_LASTNAME} caracteres`,
  },
  email: {
    required: 'El correo debe ser requerido',
    email: 'Debe de ser un correo válido',
  },
}