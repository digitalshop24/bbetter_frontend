import angular from 'angular';
import template from './template';
import style from './style';
import LandCtrl from './controller.js';

export default angular.module('bbetter.landing', [])
  .config($stateProvider => {
	    'ngInject';
	    $stateProvider.state('bbetter.landing', {
	      url: '/',
	      controller: LandCtrl,
          controllerAs: 'ctrl',
	      template
	    })
});
