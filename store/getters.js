export default {
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
