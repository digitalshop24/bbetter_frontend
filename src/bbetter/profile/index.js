import angular from 'angular';
import template from './template';
import style from './style';

export default angular.module('bbetter.profile', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
      url: '/profile',
      template
    });
  });
