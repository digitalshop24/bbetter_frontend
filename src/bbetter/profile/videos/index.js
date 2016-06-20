import angular from 'angular';
import controller from './controller';
import template from './template';
import style from './style';  // eslint-disable-line

export default angular.module('bbetter-videos', [
  'ngSanitize'
])
.component('bbetterVideos', {
  bindings: {
    instructions: "=",
    reports: "="
  },
  controller,
  template
})
.filter('trustedYoutubeUrl', $sce => {
  "ngInject";

  return recordingUrl => {
    let trustedUrl = "";

    if (recordingUrl) {
      return $sce.trustAsResourceUrl(`https://youtube.com/embed/${recordingUrl}`);
    }
    console.log(trustedUrl);
    return trustedUrl;
  };
});
