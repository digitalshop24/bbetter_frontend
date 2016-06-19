import angular from 'angular';
import template from './template';
import controller from './controller';
import style from './style';  //eslint-disable-line

export default angular.module('bbetter.contact-trainer', [])
  .component('bbetterContactTrainer', {
    template,
    controller
  });
