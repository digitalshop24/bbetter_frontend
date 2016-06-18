export default class PersonalInfoCtrl {
  constructor(api, user, $state) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.state = $state;
    this.summaries = this.summaries.length ? this.summaries : [{}];
  }

  addMore() {
    this.summaries.push({});
  }

  save(summaries) {
    const promises = [];

    summaries.forEach(summary => {
      let promise;

      if (summary.id === undefined) {
        promise = this.createSummary(summary);
      } else {
        promise = this.updateSummary(summary);
      }
      promises.push(promise);
    });

    return Promise.all(promises)
      .then(() => this.state.go('.'));
  }

  createSummary(summary) {
    const {token: authToken} = this.user;

    return this.api.postV1Summaries({authToken, ...summary})
      .then(response => console.info(response))
      .catch(response => console.error(response));
  }

  updateSummary(summary) {
    const {token: authToken} = this.user;

    const {before, after, motivation, ...rest} = summary;
    /**
     * If an image representation is a base64 DataUrl it means that it have been just uploaded from the user and should be updated
     * Otherwise the image was uploaded earlier and its representation is url to remote server\storage
     */
    const updatedB = isBase64DataUrl(before) ? before : undefined;
    const updatedA = isBase64DataUrl(after) ? after : undefined;
    const updatedM = isBase64DataUrl(motivation) ? motivation : undefined;

    return this.api.putV1SummariesId({
      authToken,
      before: updatedB,
      after: updatedA,
      motivation: updatedM,
      ...rest
    })
      .then(response => console.info(response))
      .catch(response => console.error(response));
  }
}

/**
 * @param {String} string - string to be tested
 * @return {Boolean} bool - true if string is base64 DataUrl, false - otherwise
 */
function isBase64DataUrl(string) {
  const url = string || "";

  return url.includes(";base64");
}
