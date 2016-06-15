import angular from 'angular';
import controller from './controller';
import template from './template';
import style from './style'; // eslint-disable-line

export default angular.module('bbetter.landing', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.landing', {
      controller,
      template,
      url: '/'
    });
  });
