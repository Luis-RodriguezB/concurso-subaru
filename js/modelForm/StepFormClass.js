import { MODALFORM_STEPS } from '../constansts/HTMLElements';

export class StepForm {
  #currentStep;
  #formStepArr;
  #max_Steps;
  #first_load;

  constructor(currentStep = 0) {
    this.#currentStep = currentStep;
    this.#formStepArr = [...MODALFORM_STEPS];
    this.#max_Steps = this.#formStepArr.length - 1;
    this.#first_load = true;
  }
  setLoaded(value) {
    this.#first_load = value;
  }
  isFirstLoaded() {
    return this.#first_load;
  }
  getCurrentStep() {
    return this.#currentStep;
  }
  resetCurrentStep() {
    this.#currentStep = 0;
  }
  nextStep(value) {
    return this.#currentStep += value;
  }
  getFormStepArr() {
    return this.#formStepArr;
  }
  getMaxtStep() {
    return this.#max_Steps;
  }
}