import angular from 'angular';
import template from './template';
import calorieCalculator from './calorie-calculator';
import style from './style';  //eslint-disable-line

export default angular.module('bbetter.profile', [
  calorieCalculator.name
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
      template,
      url: '/profile'
    });
  });
