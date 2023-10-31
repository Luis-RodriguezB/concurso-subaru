import {
  OPEN_MODAL_BTN,
  MODALFORM,
  CLOSE_MODAL_BTN,
  MODALFORM_FORM,
  INPUTS_FORM_GROUP,
  MODALFORM_BUTTONS,
  ARROWBACK_ICON,
  XICON,
} from '../constansts/HTMLElements';
import { StepForm } from './StepFormClass';
import constants from '../constansts/constants';
import validations from '../utils/validations';
import { configForm, inputErrorMessages } from './formConfig';

const stepForm = new StepForm(0);
let timer;

// OPEN MODAL
OPEN_MODAL_BTN.addEventListener('click', () => {
  MODALFORM.classList.add('modal-form__active');
  stepForm.resetCurrentStep();
  showCurrentStep();
});

//CLOSE MODAL
CLOSE_MODAL_BTN.addEventListener('click', closeModal);

// BUTTONS
MODALFORM_BUTTONS.addEventListener('click', (e) => {
  let nextStep = 1;

  if (e.target.matches('[data-prev]')) {
    if (stepForm.getCurrentStep() === 0) {
      closeModal();
      return;
    }
    nextStep *= -1;

  } else if (e.target.matches('[data-next]')) {
    if (validatingCurrentStepInputs()) return;
    nextStep *= 1;
  } else return;

  stepForm.nextStep(nextStep);
  showCurrentStep();
  changeContentBtn();
});

// SUBMIT
MODALFORM_FORM.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e.target);
});

// INPUTS VALIDATIONS
MODALFORM_FORM.addEventListener('input', (e) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    validatInput(e.target);

  }, constants.TIMER_500);
});


/**
 * Name: validatingCurrentStepInputs()
 * 
 * Description: function used to chect and validate the inputs
 * of the current form step
 * 
 * @returns {boolean}
 */
function validatingCurrentStepInputs() {
  const formStepsArr = stepForm.getFormStepArr();
  const inputs = [...formStepsArr[stepForm.getCurrentStep()].querySelectorAll('input')];
  inputs.forEach(input => validatInput(input));
  return inputs.some(input => input.parentElement.classList.contains('invalid-input'));
}

/**
 * Name: showCurrentStep()
 * 
 * Description: function used to show the current form step
*/
function showCurrentStep() {
  const formStepsArr = stepForm.getFormStepArr();
  formStepsArr.forEach((step, index) =>
    step.classList.toggle('active', stepForm.getCurrentStep() === index)
  );
}

/**
 * Name: closeModal()
 * 
 * Description: function used to close the modal form
 */
function closeModal() {
  cleanInputs();
  MODALFORM.classList.add('modal-form__close');
  setTimeout(() => {
    MODALFORM.classList.remove('modal-form__active', 'modal-form__close');
  }, constants.TIMER_300);
}

/**
 * Name: cleanInputs()
 * 
 * Description: function use to clean all inputs of the modal form
 */
function cleanInputs() {
  INPUTS_FORM_GROUP.forEach(INPUT => {
    INPUT.classList.remove('invalid-input');
    INPUT.querySelector('.form-input').value = '';
    INPUT.querySelectorAll('.error-message').forEach(span => span.remove());
  });
}

/**
 * Name: validatInput(target)
 * 
 * Description: function that us use to validate input and add 
 * the error message if there is an invalid input
 * 
 * 
 * @param {object} target 
 */
function validatInput(target) {
  const { name, value, parentElement } = target;
  const errorElement = parentElement.querySelector('.error-message');

  if (errorElement) errorElement.remove();
  const error = getInputError(name, value.trim());

  if (error) {
    parentElement.classList.add('invalid-input');
    const spanError = document.createElement('span');
    spanError.classList.add('error-message');
    spanError.textContent = error;
    parentElement.appendChild(spanError);

  } else {
    parentElement.classList.remove('invalid-input');
  }
}

/**
 * Name: getInputError(name, value)
 * 
 * Description: function that is use to validate inputs,
 * receives the name and the value properties of the input
 * 
 * @param {string} name 
 * @param {string} value 
 * @returns {string}
 */
function getInputError(name, value) {
  let error;

  for (const key in configForm[name]) {
    if (error) break;
    const inputConfig = configForm[name];
    error = setInputError(key, inputConfig[key], value, name);
  }
  return error;
}

/**
 * Name: setInputError(property, propValue, inputValue, inputName)
 * 
 * Description: function that is use to check if the value of the inputs is correct
 * and return false if it is valid or the error message if it is invalid
 * 
 * @param {string} property
 * @param {string} propValue 
 * @param {string} inputValue 
 * @param {string} inputName 
 * @returns {string|boolean}
 */
function setInputError(property, propValue, inputValue, inputName) {
  const inputErrors = inputErrorMessages[inputName];
  const { required, min, max, email, phone } = validations;

  switch (property) {
    case 'required':
      if (!propValue) return false;
      return required(inputValue) && inputErrors[property];
    case 'min':
      return min(inputValue, propValue) && inputErrors[property];
    case 'max':
      return max(inputValue, propValue) && inputErrors[property];
    case 'email':
      if (propValue) return email(inputValue) && inputErrors[property];
      return false;
    case 'phone':
      if (propValue) return phone(inputValue) && inputErrors[property];
      return false;
  }
}

/**
 * Name: changeContentBtn()
 * 
 * Description: function that is used to change the button content
 */
function changeContentBtn() {
  const currentStep = stepForm.getCurrentStep();
  const btnCancel = MODALFORM_BUTTONS.querySelector('[data-prev]');
  const btnNext = MODALFORM_BUTTONS.querySelector('[data-next]');
  const btnSubmit = MODALFORM_BUTTONS.querySelector('[data-submit]');

  btnCancel.querySelector('.btn-first-span').innerHTML = currentStep === 0 ? 'Cancelar' : ARROWBACK_ICON;
  btnCancel.querySelector('.btn-scond-span').innerHTML = currentStep === 0 ? XICON : 'Volver';

  btnNext.classList.toggle('d-flex', currentStep !== stepForm.getMaxtStep());
  btnSubmit.classList.toggle('d-flex', currentStep === stepForm.getMaxtStep());
}