import {
  OPEN_MODAL_BTN,
  MODALFORM,
  MODALFORM_FORM,
  CLOSE_MODAL_BTN,
  INPUTS_FORM_GROUP,
  SPAN_ERROR,
} from '../constansts/HTMLElements';
import constants from '../constansts/constants';
import validations from '../utils/validations';
import { configForm, inputErrorMessages } from './formConfig';

let timer, timeoutVal = 500;

OPEN_MODAL_BTN.addEventListener('click', () => {
  MODALFORM.classList.add('modal-form__active');
});

CLOSE_MODAL_BTN.addEventListener('click', closeModal);

MODALFORM_FORM.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e.target);
});

INPUTS_FORM_GROUP.forEach((INPUT) => {
  INPUT.addEventListener('keydown', (e) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const { name, value } = e.target;
      const errorElement = INPUT.querySelector('.error-message');

      if (errorElement) errorElement.remove();

      const errors = validatingInput(name, value.trim());

      if (errors) {
        INPUT.classList.add('invalid-input');
        SPAN_ERROR.classList.add('error-message');
        SPAN_ERROR.textContent = errors;
        INPUT.appendChild(SPAN_ERROR);
      } else {
        INPUT.classList.remove('invalid-input');
      }
    }, timeoutVal);
  });
});

function closeModal() {
  cleanInputs();
  MODALFORM.classList.add('modal-form__close');
  setTimeout(() => {
    MODALFORM.classList.remove('modal-form__active', 'modal-form__close');
  }, constants.TIMER_300);
}

function cleanInputs() {
  INPUTS_FORM_GROUP.forEach(INPUT => {
    INPUT.classList.remove('invalid-input');
    INPUT.querySelector('.form-input').value = '';
    INPUT.querySelectorAll('.error-message').forEach(span => span.remove());
  })
}

function validatingInput(name, value) {
  let error;

  for (const key in configForm[name]) {
    if (error) break;
    const inputConfig = configForm[name];
    error = setValidation(key, inputConfig[key], value, name);
  }

  return error;
}

function setValidation(property, propValue, inputValue, inputName) {
  const inputErrors = inputErrorMessages[inputName];
  const { required, min, max, email } = validations;

  switch (property) {
    case 'required':
      if (!propValue) return;
      return required(inputValue) && inputErrors[property];
    case 'min':
      return min(inputValue, propValue) && inputErrors[property];
    case 'max':
      return max(inputValue, propValue) && inputErrors[property];
    case 'email':
      if (propValue) return email(inputValue) && inputErrors[property];
      return;
  }
}