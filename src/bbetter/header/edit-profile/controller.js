export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.instance = $uibModalInstance;
  }

  edit(user) {
    const {token: authToken} = this.user;

    return this.api.putV1UsersEdit({authToken, ...user})
      .then(profile => Object.assign(this.user, profile))
      .then(() => this.instance.close())
      .catch(response => console.error(response));
  }

  close() {
    return this.instance.close();
  }
}
