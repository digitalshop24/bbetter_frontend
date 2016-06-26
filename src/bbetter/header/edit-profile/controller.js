export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance, $scope) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.scope = $scope;
    this.instance = $uibModalInstance;
  }

  edit(user) {
    if ( this.user.promocode ) delete user.promocode;

    this.scope.error = null;
    const {token: authToken} = this.user;

    return this.api.putV1UsersEdit({authToken, ...user})
      .then(profile => Object.assign(this.user, profile))
      .then(() => this.instance.close())
      .catch(response => {
        console.error(response);
        this.scope.error = response.body.message;
      } );
  }

  close() {
    return this.instance.close();
  }
}
