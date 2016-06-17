import angular from 'angular';
import template from './template';
import contactTrainer from './contact-trainer';
import style from './style';  //eslint-disable-line

export default angular.module('bbetter.profile', [
  contactTrainer.name
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
      template,
      url: '/profile'
    });
  });
