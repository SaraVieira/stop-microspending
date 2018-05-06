const NAME = 'stop-microspensing';

export default {
  set: obj =>
    typeof window === 'undefined'
      ? {}
      : window.localStorage.setItem(NAME, JSON.stringify(obj)),
  get: () =>
    typeof window === 'undefined'
      ? []
      : JSON.parse(window.localStorage.getItem(NAME)) || []
};
