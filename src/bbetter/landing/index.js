import angular from 'angular';
import template from './template';
import controller from './controller';
import style from './style';

export default angular.module('bbetter.landing', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.landing', {
      controller,
      controllerAs: 'ctrl',
      template, 
      url: '/'
    });
  });
