import Vuex from 'vuex';
import uuidv4 from 'uuid/v4';
import localStorage from '~/plugins/localStorage';
import state from './state';

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
      }
    },
    getters: {
      getTotalSpending: state => {
        const value = state.payments.reduce(
          (acc, payment) => acc + payment.price / payment.period,
          0
        );

        return parseFloat(value).toFixed(2);
      },
      getFrequency: state => value => {
        const frequency = state.periods.find(p => p.value === value);
        return frequency && frequency.label ? frequency.label : '';
      },
      getFrequencyValue: state => label => {
        const frequency = state.periods.find(p => p.label === label);
        return frequency.value;
      }
    }
  });
};

export default createStore;
