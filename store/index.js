import Vuex from 'vuex';
import uuidv4 from 'uuid/v4';
import localStorage from '~/plugins/localStorage';

const createStore = () => {
  return new Vuex.Store({
    state: {
      periods: [
        { value: 12, label: 'Yearly' },
        { value: 1, label: 'Monthly' },
        { value: 0.5, label: 'Twice a Month' },
        { value: 0.25, label: 'Weekly' },
        { value: 30, label: 'Daily' }
      ],
      payments: []
    },
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
        return state.payments.reduce(
          (acc, payment) => acc + payment.price / payment.period,
          0
        );
      },
      getFrequency: state => value => {
        const frequency = state.periods.find(p => p.value === value);
        return frequency.label;
      },
      getFrequencyValue: state => label => {
        const frequency = state.periods.find(p => p.label === label);
        return frequency.value;
      }
    }
  });
};

export default createStore;
