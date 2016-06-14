import angular from 'angular';
import template from './template';
import style from './style';  //eslint-disable-line

export default angular.module('bbetter.profile', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
      template,
      url: '/profile'
    });
  });
