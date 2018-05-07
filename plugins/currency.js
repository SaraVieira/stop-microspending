import Vue from 'vue';

Vue.filter('currency', val => `${parseFloat(val).toFixed(2)}$`);
