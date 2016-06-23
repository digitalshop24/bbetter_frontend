export default class NotificationCtrl {
  constructor() {
    this.displayed = true;
  }

  close() {
    this.displayed = false;
  }
}
