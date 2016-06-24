import angular from 'angular';
import template from './template';
import paymentButton from './payment-button';
import style from './style';  // eslint-disable-line

export default angular.module('bbetter.tariffs', [
  paymentButton.name
])
.component('bbetterTariffs', {
  bindings: {
    tariffs: '='
  },
  template
});
