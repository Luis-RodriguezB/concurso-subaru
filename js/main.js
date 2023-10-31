import './modelForm/modalForm';
import { onLoadTheme } from './changeTheme';
import { BODY_ELEMENT, LOADER_ELEMENT } from "./constansts/HTMLElements";

document.onreadystatechange = function () {
  const isLoaded = document.readyState === 'complete';

  BODY_ELEMENT.style.visibility = isLoaded ? 'visible' : 'hidden';
  LOADER_ELEMENT.style.visibility = isLoaded ? 'hidden' : 'visible';
};

window.onload = function () {
  onLoadTheme();
};


