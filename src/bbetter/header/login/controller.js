export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.instance = $uibModalInstance;
  }

  login(credentials) {
    credentials.error = null;
    return this.api.postV1UsersSignIn(credentials)
      .then(response => {
        const {auth_token: token, ...profile} = response;

        return Object.assign(this.user, profile, {token});
      })
      .then(() => this.instance.close())
      .then(() => this.state.go('bbetter.profile'))
      .catch(response => {
        console.error(response);
        credentials.error = response.body.message;
      });
  }

  close() {
    return this.instance.close();
  }
}
