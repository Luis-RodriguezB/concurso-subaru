export const BODY_ELEMENT = document.body;
export const LOADER_ELEMENT = document.querySelector('.loader_wrapper');

/** HEADER ELEMENTS  */
export const CHANGE_THEME_BTN = document.querySelector('#change-theme-select');
export const MOON_ICON = document.querySelector('[data-moon]');
export const SUN_ICON = document.querySelector('[data-sun]');

/* MAIN ELEMENTS */
export const OPEN_MODAL_BTN = document.querySelector('[data-open-modal]');

/** FORM ELEMENTS */
export const MODALFORM = document.querySelector('.modal-form');
export const CLOSE_MODAL_BTN = MODALFORM.querySelector('.close-modal-btn');
export const MODALFORM_FORM = MODALFORM.querySelector('[data-modal-form]');
export const MODALFORM_STEPS = MODALFORM.querySelectorAll('.form-step');
export const INPUTS_FORM_GROUP = MODALFORM.querySelectorAll('.form-group');
export const MODALFORM_BUTTONS = MODALFORM.querySelector('.buttons-containers');


const X  = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
`;
const ARROW_BACK = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7l-5 5l5 5" />
    <path d="M17 7l-5 5l5 5" />
  </svg>
`;

export const ICONS = {
  X,
  ARROW_BACK,
}