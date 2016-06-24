export default class PublicOfertCtrl {
  constructor(api, user, $uibModalInstance) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.instance = $uibModalInstance;
  }

  close() {
    return this.instance.close();
  }
}
