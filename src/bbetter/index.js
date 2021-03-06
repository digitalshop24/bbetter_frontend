import angular from 'angular';
import modal from './modal';
import header from './header';
import footer from './footer';
import landing from './landing';
import profile from './profile';
import style from './style';
import content from './template';


export default angular.module('bbetter', [
  modal.name,
  header.name,
  landing.name,
  footer.name,
  profile.name,
])
.config($stateProvider => {
  "ngInject";
  $stateProvider.state('bbetter', {
    abstract: true,
    views: {
      '': {
        template: content
      }
    }
  });
});
