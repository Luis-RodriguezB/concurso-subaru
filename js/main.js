import constants from './constants';

const CHANGE_THEME_BTN = document.querySelector('#change-theme-select');
const SUN_ICON = document.querySelector('[data-sun]');
const MOON_ICON = document.querySelector('[data-moon]');
const BODY_ELEMENT = document.body;

window.onload = function() {
  onLoadTheme();
}

function onLoadTheme() {
  const theme = localStorage.getItem('theme') || '';
  switch(theme) {
    case constants.DARK_THEME:
      BODY_ELEMENT.dataset.theme = constants.DARK_THEME;
      SUN_ICON.classList.add('show', 'wrapper__icon-showing');
      CHANGE_THEME_BTN.checked = true;
      break;
      
    default:
      BODY_ELEMENT.dataset.theme = constants.LIGHT_THEME;
      MOON_ICON.classList.add('show', 'wrapper__icon-showing');
      break;
  }
}

CHANGE_THEME_BTN.addEventListener('click', (e) => {
  const isChecked = e.target.checked;
  e.target.disabled = true;
  
  localStorage.setItem(
    'theme',
    isChecked 
    ? constants.DARK_THEME 
    : constants.LIGHT_THEME
  );
  BODY_ELEMENT.dataset.theme = isChecked 
    ? constants.DARK_THEME 
    : constants.LIGHT_THEME;
    
  if (isChecked) {
    MOON_ICON.classList.add('wrapper__icon-hidding');

    setTimeout(() => {
      MOON_ICON.classList.remove('show', 'wrapper__icon-hidding');
      SUN_ICON.classList.add('show')
      e.target.disabled = false;
    }, 500);
  } else {
    SUN_ICON.classList.add('wrapper__icon-hidding');

    setTimeout(() => {
      SUN_ICON.classList.remove('show', 'wrapper__icon-hidding');
      MOON_ICON.classList.add('show')
      e.target.disabled = false;
    }, 500);
  }
});
