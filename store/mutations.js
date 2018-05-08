export default {
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
}
