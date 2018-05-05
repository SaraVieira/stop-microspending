// ~/plugins/localStorage.js

import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
  createPersistedState({
    paths: ['payments']
  })(store);
};
