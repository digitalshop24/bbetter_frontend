export default class FeedbackCtrl {
  constructor(api, user) {
    "ngInject";
    this.api = api;
    this.user = user;
  }

  contactTrainer(message) {
    const {token: authToken} = this.user;

    return this.api.postV1Messages({authToken, ...message})
      .then(() => {
        this.messageWasSent = true;
      })
      .catch(response => console.error(response));
  }
}
