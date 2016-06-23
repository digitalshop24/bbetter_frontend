import RegistartionCtrl from './registration/controller';
import registartionTemplate from './registration/template';

import LoginCtrl from './login/controller';
import loginTemplate from './login/template';

import EditProfileCtrl from './edit-profile/controller';
import editProfileCtrlTemplate from './edit-profile/template';

export default class RegistationCtrl {
  constructor(api, user, modal, $state) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.modal = modal;
    this.state = $state;
  }

  registration() {
    return this.modal.open({
      controller: RegistartionCtrl,
      template: registartionTemplate
    });
  }

  login() {
    return this.modal.open({
      controller: LoginCtrl,
      template: loginTemplate
    });
  }

  editProfile() {
    return this.modal.open({
      controller: EditProfileCtrl,
      template: editProfileCtrlTemplate
    });
  }

  logout() {
    const {token: authToken} = this.user;

    return this.api.deleteV1UsersSignOut({authToken})
      .then(() => this.user.deauthorize())
      .then(() => this.state.go('bbetter.landing'))
      .catch(response => console.error(response));
  }
}
