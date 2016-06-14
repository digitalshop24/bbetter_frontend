export default class ModalCtrl {
  constructor($uibModalInstance) {
    "ngInject";
    this.instance = $uibModalInstance;
  }

  close() {
    return this.instance.close();
  }
}
