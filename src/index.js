import angular from 'angular';
import bbetter from './bbetter';
import style from './style';

const app = angular.module('app', [
  'ui.router',
  'ngStorage',
  bbetter.name
]);

app.config($locationProvider => {
  "ngInject";
  $locationProvider.html5Mode(true)
});

if (PRODUCTION) {
  app.config($compileProvider => {
      "ngInject";
      $compileProvider.debugInfoEnabled(false);
  });
}
