import angular from 'angular';
import controller from './controller';
import template from './template';
import fileUploadButton from './file-upload-button';
import style from './style'; //eslint-disable-line

export default angular.module('bbetter.personal-info', [
  fileUploadButton.name
])
  .component('bbetterPersonalInfo', {
    bindings: {
      summaries: '='
    },
    controller,
    template
  });
