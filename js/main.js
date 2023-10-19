import constants from './constants';
import {
  BODY_ELEMENT,
  CHANGE_THEME_BTN,
  MOON_ICON,
  SUN_ICON,
  INPUTS_FORM_GROUP,
} from './HTMLElements';

const { 
  theme: { DARK_THEME, LIGHT_THEME, THEME_KEY },
  IS_DARK_SCHEMEMATCH,
  CHANGE_ICON_TIME
} = constants;


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
  const theme = localStorage.getItem(THEME_KEY) || '';
  const isDarkMode = (theme.length === 0 && IS_DARK_SCHEMEMATCH) || (theme === DARK_THEME);

  if (isDarkMode) {
    SUN_ICON.classList.add('show', 'wrapper__icon-showing');
  } else {
    MOON_ICON.classList.add('show', 'wrapper__icon-showing');
    BODY_ELEMENT.classList.toggle(LIGHT_THEME);
  }
}

CHANGE_THEME_BTN.addEventListener('click', (e) => {
  const currentTheme = localStorage.getItem(THEME_KEY);
  const nextTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

  localStorage.setItem(THEME_KEY, nextTheme);

  if (IS_DARK_SCHEMEMATCH) {
    BODY_ELEMENT.classList.toggle(LIGHT_THEME);
  } else {
    BODY_ELEMENT.classList.toggle(DARK_THEME);
  }

  if (nextTheme === DARK_THEME) {
    MOON_ICON.classList.add('wrapper__icon-hidding');

    setTimeout(() => {
      MOON_ICON.classList.remove('show', 'wrapper__icon-hidding');
      SUN_ICON.classList.add('show');
    }, CHANGE_ICON_TIME);
  } else {
    SUN_ICON.classList.add('wrapper__icon-hidding');

    setTimeout(() => {
      SUN_ICON.classList.remove('show', 'wrapper__icon-hidding');
      MOON_ICON.classList.add('show');
    }, CHANGE_ICON_TIME);
  }
});
