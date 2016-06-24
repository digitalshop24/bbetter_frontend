export default class PersonalInfoCtrl {
  constructor(api, user, $q) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.promise = $q;
    this.summaries = this.summaries.length ? this.summaries : [{}];
  }

  get canMore() {
    const {active_tariff} = this.user;

    const {people_number = 0} = active_tariff || {};

    return this.summaries.length < people_number;
  }

  addMore() {
    if (this.canMore) {
      this.summaries.push({});
    }
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

    return this.promise.all(promises)
      .then(() => {
        this.saved = true;
      });
  }

  createSummary(summary) {
    const {token: authToken} = this.user;

    return this.api.postV1Summaries({authToken, ...summary})
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
