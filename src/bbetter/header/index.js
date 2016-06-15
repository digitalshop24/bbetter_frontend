import angular from 'angular';
import template from './template';
import controller from './controller';

export default angular.module('bbetter.header', [])
  .component('bbetterHeader', {
    template,
    controller
  });
