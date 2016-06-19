import angular from 'angular';
import controller from './controller';
import template from './template';
<<<<<<< HEAD
import personalInfo from './personal-info';
=======
import calorieCalculator from './calorie-calculator';
>>>>>>> feature/calories-calculator
import style from './style';  //eslint-disable-line
import ProfileCtrl from './controller.js';

export default angular.module('bbetter.profile', [
  personalInfo.name
  calorieCalculator.name

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
