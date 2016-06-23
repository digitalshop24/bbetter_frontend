export default class PaymentButtonCtrl {
  constructor(user, config) {
    "ngInject";
    this.user = user;
    this.payment = config.payment;
  }
}
