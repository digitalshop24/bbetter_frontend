import RegistartionCtrl from '../registrationModal/registration/controller';
import registartionTemplate from '../registrationModal/registration/template';

import LoginCtrl from '../registrationModal/login/controller';
import loginTemplate from '../registrationModal/login/template';

import EditProfileCtrl from '../registrationModal/edit-profile/controller';
import editProfileCtrlTemplate from '../registrationModal/edit-profile/template';

export default class HeaderCtrl {
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
