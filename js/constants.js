const IS_DARK_SCHEMEMATCH = window.matchMedia("(prefers-color-scheme: dark)").matches;

const constants = {
  theme: {
    THEME_KEY: 'theme',
    DARK_THEME: 'dark-theme',
    LIGHT_THEME: 'light-theme',
  },
  CHANGE_ICON_TIME: 300,
  IS_DARK_SCHEMEMATCH, 
};
export default constants;