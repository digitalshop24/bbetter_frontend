import angular from 'angular';
import header from './header/template';
import content from './template';
import footer from './footer/template';
import landing from './landing';
import profile from './profile';
import style from './style';

export default angular.module('bbetter', [
  landing.name,
  profile.name
])
.config($stateProvider => {
  "ngInject";
  $stateProvider.state('bbetter', {
    abstract: true,
    views: {
      '': {
        template: content
      },
      'header@bbetter': {
        template: header
      },
      'footer@bbetter': {
        template: footer
      }
    }
  })
})
