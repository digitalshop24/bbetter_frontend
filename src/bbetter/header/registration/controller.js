export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance, $scope) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.scope = $scope;
    this.instance = $uibModalInstance;
  }

  register(user) {
    this.scope.reg_error = null;

    return this.api.postV1Users(user)
      .then(response => {
        const {auth_token: token, ...profile} = response;

        return Object.assign(this.user, profile, {token});
      })
      .then(() => this.instance.close())
      .then(() => this.state.go('bbetter.profile'))
      .catch(response => {
        console.error(response);
        this.scope.reg_error = response.body.message;
      } );
  }

  close() {
    return this.instance.close();
  }
}
