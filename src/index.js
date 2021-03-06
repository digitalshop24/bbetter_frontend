import angular from 'angular';
import api from './api';
import config from './../app/config';
import bbetter from './bbetter';
import style from './style';  //eslint-disable-line
import User from './user';

/* global PRODUCTION */

const app = angular.module('app', [
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngStorage',
  'timer',
  'slick',
  'swagger.api',
  '720kb.socialshare',
  api.name,
  bbetter.name
]);

app.constant('config', config);

app.service('user', User);

app.config($locationProvider => {
  "ngInject";
  $locationProvider.html5Mode(true);
});

if (PRODUCTION) {
  app.config($compileProvider => {
    "ngInject";
    $compileProvider.debugInfoEnabled(false);
  });
}

app.run(($rootScope, $state, user) => {
  "ngInject";
  $rootScope.$on('$stateChangeStart', authHandler);

  function authHandler(event, toState) {
    const landing = 'bbetter.landing';

    if (toState.name !== landing && !user.authorized) {
      event.preventDefault();
      $state.go(landing);
    }

    return;
  }
});
