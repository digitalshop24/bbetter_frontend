import angular from 'angular';
import controller from './controller';
import template from './template';
import videos from './videos';
import style from './style';  //eslint-disable-line

export default angular.module('bbetter.profile', [
  videos.name
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
      controller,
      controllerAs: 'ctrl',
      resolve: {
        /* Hardcoded instructions */
        instructions: () => [{}, {}, {}, {}, {}, {}],
        reports: (api, user) => {
          "ngInject";
          const {token: authToken} = user;

          return api.getV1Videos({authToken});
        }
      },
      template,
      url: '/profile'
    });
  });
