import { MODALFORM_STEPS } from '../constansts/HTMLElements';

export class StepForm {
  #currentStep;
  #formStepArr;
  #max_Steps;

  constructor(currentStep = 0) {
    this.#currentStep = currentStep;
    this.#formStepArr = [...MODALFORM_STEPS];
    this.#max_Steps = this.#formStepArr.length - 1;
  }

  getCurrentStep() {
    return this.#currentStep;
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