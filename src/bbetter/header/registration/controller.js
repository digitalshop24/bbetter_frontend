export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.instance = $uibModalInstance;
  }

  register(user) {
    return this.api.postV1Users(user)
      .then(response => {
        const {auth_token: token, ...profile} = response;

        return Object.assign(this.user, profile, {token});
      })
      .then(() => this.instance.close())
      .then(() => this.state.go('bbetter.profile'))
      .catch(response => console.error(response));
  }

  close() {
    return this.instance.close();
  }
}
