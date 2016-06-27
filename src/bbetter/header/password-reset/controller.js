export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance, $scope) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.instance = $uibModalInstance;
    this.scope = $scope;
    this.scope.error = null;
    this.scope.success = null;
  }

  resetPassword(credentials) {

    return this.api.postV1UsersPassword(credentials)
      .then(response => {
        this.scope.success = true;
      })
      .catch(response => { console.error(response); this.scope.error = response.body.message; });
  }

  close() {
    return this.instance.close();
  }
}
