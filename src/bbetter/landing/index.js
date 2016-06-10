import angular from 'angular';
import template from './template';
import style from './style';

export default angular.module('bbetter.landing', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.landing', {
      url: '/',
      template
    });
  });
