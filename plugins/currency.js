import Vue from 'vue';

const formatCurrency = (val, currency) => val.toLocaleString(currency.locale, { style: 'currency', currency: currency.currency });

Vue.filter('currency', formatCurrency);

export default formatCurrency;
