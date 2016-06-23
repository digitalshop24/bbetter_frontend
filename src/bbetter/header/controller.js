export default class HeaderCtrl {
  constructor(api, user, modal, $state, registration) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.modal = modal; 
    this.state = $state;
    this.registrationPopup = registration;
  }
}
