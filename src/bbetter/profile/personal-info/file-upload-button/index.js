import angular from 'angular';
import controller from './controller';
import template from './template';
import style from './style';  // eslint-disable-line

export default angular.module('bbetter.file-upload-button', [
  'angularFileUpload'
])
.directive('fileChange', $parse => {
  "ngInject";
  return {
    require: 'ngModel',
    restrict: 'A',
    link: (scope, element, attrs) => {
      const fileChangeHandler = $parse(attrs.fileChange);

      element.on('change', event => {
        const {files} = event.target;

        scope.$apply(() => {
          fileChangeHandler(scope, {file: files[0]});
        });
      });
    }
  };
})
.component('fileUploadButton', {
  bindings: {
    label: "@",
    fileUrl: "="
  },
  controller,
  template
});
