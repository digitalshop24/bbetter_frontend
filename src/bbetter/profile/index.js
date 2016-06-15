import angular from 'angular';
import template from './template';
import style from './style';  //eslint-disable-line
import ProfileCtrl from './controller.js';

export default angular.module('bbetter.profile', [])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
    	url: '/profile',
    	controller: ProfileCtrl,
      	controllerAs: 'ctrl',
      	template
      
    });
  });
