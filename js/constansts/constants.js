const IS_DARK_SCHEMEMATCH = window.matchMedia("(prefers-color-scheme: dark)").matches;

const constants = {
  theme: {
    THEME_KEY: 'theme',
    DARK_THEME: 'dark-theme',
    LIGHT_THEME: 'light-theme',
  },
  TIMER_300: 300,
  TIMER_500: 500,
  IS_DARK_SCHEMEMATCH,
  LABELS: {
    BACK: 'Volver',
    CANCEL: 'Cancelar',
    NEXT: 'Siguiente',
    SUBMIT: 'Enviar',
  }
};
export default constants;