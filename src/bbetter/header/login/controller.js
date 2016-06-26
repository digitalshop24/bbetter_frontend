import ResetPasswordCtrl from '../password-reset/controller';
import resetPasswordTemplate from '../password-reset/template';

export default class RegistartionCtrl {
  constructor(api, user, $state, $uibModalInstance, modal) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.instance = $uibModalInstance;
    this.modal = modal;
  }

  login(credentials) {
    return this.api.postV1UsersSignIn(credentials)
      .then(response => {
        const {auth_token: token, ...profile} = response;

        return Object.assign(this.user, profile, {token});
      })
      .then(() => this.instance.close())
      .then(() => this.state.go('bbetter.profile'))
      .catch(response => console.error(response));
  }

  resetPassword() {
    this.instance.close();
    return this.modal.open({
      controller: ResetPasswordCtrl,
      template: resetPasswordTemplate
    });
  }

  close() {
    return this.instance.close();
  }
}
