import constants from './constants';
import {
  BODY_ELEMENT,
  CHANGE_THEME_BTN,
  MOON_ICON,
  SUN_ICON,
  INPUTS_FORM_GROUP,
} from './HTMLElements';

document.onreadystatechange = function () {
  const isLoaded = document.readyState === 'complete';

  document.body.style.visibility = isLoaded ? 'visible' : 'hidden';
  document.querySelector('.loader_wrapper').style.visibility = isLoaded
    ? 'hidden'
    : 'visible';
};

window.onload = function () {
  onLoadTheme();
};

function onLoadTheme() {
  const theme = localStorage.getItem('theme') || '';
  switch (theme) {
    case constants.theme.DARK_THEME:
      BODY_ELEMENT.dataset.theme = constants.theme.DARK_THEME;
      SUN_ICON.classList.add('show', 'wrapper__icon-showing');
      CHANGE_THEME_BTN.checked = true;
      break;

    default:
      BODY_ELEMENT.dataset.theme = constants.theme.LIGHT_THEME;
      MOON_ICON.classList.add('show', 'wrapper__icon-showing');
      break;
  }
}

CHANGE_THEME_BTN.addEventListener('click', (e) => {
  const isChecked = e.target.checked;
  e.target.disabled = true;

  localStorage.setItem(
    'theme',
    isChecked ? constants.theme.DARK_THEME : constants.theme.LIGHT_THEME
  );
  BODY_ELEMENT.dataset.theme = isChecked
    ? constants.theme.DARK_THEME
    : constants.theme.LIGHT_THEME;

  if (isChecked) {
    MOON_ICON.classList.add('wrapper__icon-hidding');

    setTimeout(() => {
      MOON_ICON.classList.remove('show', 'wrapper__icon-hidding');
      SUN_ICON.classList.add('show');
      e.target.disabled = false;
    }, constants.CHANGE_ICON_TIME);
  } else {
    SUN_ICON.classList.add('wrapper__icon-hidding');

    setTimeout(() => {
      SUN_ICON.classList.remove('show', 'wrapper__icon-hidding');
      MOON_ICON.classList.add('show');
      e.target.disabled = false;
    }, constants.CHANGE_ICON_TIME);
  }
});

INPUTS_FORM_GROUP.forEach((INPUT) => {
  INPUT.addEventListener('focusout', (event) => {
    const value = event.target.value;
    const isEmpty = value.trim().length === 0;

    INPUT.querySelector('.form-label').style.bottom = isEmpty ? '6px' : '30px';
  });
});
