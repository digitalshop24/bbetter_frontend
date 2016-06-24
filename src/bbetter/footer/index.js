import angular from 'angular';
import template from './template';
import controller from './controller';

export default angular.module('bbetter.footer', [])
  .component('bbetterFooter', {
    template,
    controller
  });
