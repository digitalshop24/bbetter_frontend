import angular from 'angular';
import controller from './controller';
import template from './template';

export default angular.module('bbetter.payment-button', [
  'ngSanitize'
])
.component('paymentButton', {
  bindings: {
    buttonClass: '@',
    title: '@',
    price: '='
  },
  controller,
  template
})
.filter('trustedUrl', $sce => {
  "ngInject";

  return url => {
    let trustedUrl = "";

    if (url) {
      return $sce.trustAsResourceUrl(url);
    }

    return trustedUrl;
  };
});
