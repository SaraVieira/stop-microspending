const NAME = 'stop-microspensing';
const CURRENCY_NAME = 'stop-microspending-currency'

export default {
  set: obj =>
    typeof window === 'undefined'
      ? {}
      : window.localStorage.setItem(NAME, JSON.stringify(obj)),
  get: () =>
    typeof window === 'undefined'
      ? []
      : JSON.parse(window.localStorage.getItem(NAME)) || [],
  setCurrency: obj =>
    typeof window === 'undefined'
      ? {}
      : window.localStorage.setItem(CURRENCY_NAME, JSON.stringify(obj)),
  getCurrency: () =>
    typeof window === 'undefined'
      ? []
      : JSON.parse(window.localStorage.getItem(CURRENCY_NAME)) || undefined,
};
