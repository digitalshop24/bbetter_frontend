import angular from 'angular';
import controller from './controller';
import template from './template';
import calorieCalculator from './calorie-calculator';
import contactTrainer from './contact-trainer';
import personalInfo from './personal-info';
import style from './style';  //eslint-disable-line

export default angular.module('bbetter.profile', [
  calorieCalculator.name,
  contactTrainer.name,
  personalInfo.name
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('bbetter.profile', {
      controller,
      controllerAs: 'ctrl',
      resolve: {
        summaries: (api, user) => {
          "ngInject";
          const {token: authToken} = user;

          return api.getV1Summaries({authToken})
            .catch(response => console.error(response));
        }
      },
      template,
      url: '/profile'
    });
  });
