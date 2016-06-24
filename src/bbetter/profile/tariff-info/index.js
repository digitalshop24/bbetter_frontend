import angular from 'angular';
import controller from './controller';
import template from './template';
import style from './style';  // eslint-disable-line

export default angular.module('bbetter.tariff-info', [])
  .component('bbetterTariffInfo', {
    bindings: {
      tariff: "="
    },
    controller,
    template
  });
