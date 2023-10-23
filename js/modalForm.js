import {
  OPEN_MODAL_BTN,
  MODALFORM,
  MODALFORM_FORM,
  CLOSE_MODAL_BTN,
  INPUTS_FORM_GROUP,
  SPAN_ERROR,
} from './HTMLElements';
import constants from './constants';
import { configForm } from './modelForm/formConfig';

let timer, timeoutVal = 1000;

OPEN_MODAL_BTN.addEventListener('click', () => {
  MODALFORM.classList.add('modal-form__active');
});

CLOSE_MODAL_BTN.addEventListener('click', () => {
  MODALFORM.classList.add('modal-form__close');
  setTimeout(() => {
    MODALFORM.classList.remove('modal-form__active', 'modal-form__close');
  }, constants.TIMER_300);
});

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

      if (!!errorElement) errorElement.remove();

      const errors = validatingInput(name, value.trim());

      if (!!errors) {
        INPUT.classList.add('invalid-input');
        SPAN_ERROR.classList.add('error-message');
        SPAN_ERROR.textContent = errors.errorMessage;
        INPUT.appendChild(SPAN_ERROR);
      } else {
        INPUT.classList.remove('invalid-input');
      }
    }, timeoutVal);
  });
});

function validatingInput(name, value) {
  const valueLength = value.length;
  let errorMessage;

  if (valueLength === 0) {
    errorMessage = configForm[name].errorsMessages.required;
  } else if (!!configForm[name].min && valueLength < configForm[name].min) {
    errorMessage = configForm[name].errorsMessages.minLength;
  } else if (!!configForm[name].max && valueLength > configForm[name].max) {
    errorMessage = configForm[name].errorsMessages.maxLength;
  }

  return errorMessage && { errorMessage };
}
