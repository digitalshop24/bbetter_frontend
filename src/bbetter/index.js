import angular from 'angular';
import modal from './modal';
import header from './header';
import footer from './footer/template';
import landing from './landing';
import profile from './profile';
import style from './style';
import content from './template';
import style from './style';  // eslint-disable-line


export default angular.module('bbetter', [
  modal.name,
  header.name,
  landing.name,
  profile.name,
  // initSlider.name
])
.config($stateProvider => {
  "ngInject";
  $stateProvider.state('bbetter', {
    abstract: true,
    views: {
      '': {
        template: content
      },
      'footer@bbetter': {
        template: footer
      }
    }
  });
});
