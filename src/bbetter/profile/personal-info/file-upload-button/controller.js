/* global FileReader */

export default class FileUploadBtnCtrl {
  constructor($scope) {
    "ngInject";
    this.fileReader = new FileReader();
    this.fileReader.onload = event => $scope.$apply(() => {
      this.updateFileUrl(event.target.result);
    });
  }

  upload(file) {
    this.fileReader.readAsDataURL(file);
  }

  updateFileUrl(url) {
    this.fileUrl = url;
  }
}
