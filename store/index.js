import Vuex from 'vuex';
import uuidv4 from 'uuid/v4';
import localStorage from '~/plugins/localStorage';
import state from './state';
import getters from './getters';

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations: {
      createPayments(state, payments) {
        state.payments = payments;
      },
      addPayment(state, newPayment) {
        newPayment.id = uuidv4();
        newPayment.price = parseFloat(newPayment.price);
        state.payments = state.payments.concat(newPayment);
        localStorage.set(state.payments);
      },
      removePayment(state, id) {
        state.payments = state.payments.filter(payment => payment.id !== id);
        localStorage.set(state.payments);
      },
      changeCurrency(state, newCurrency) {
        state.currency = newCurrency;
      }
    },
    getters
  });
};

export default createStore;
