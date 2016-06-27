export default class ProfileCtrl {
  constructor(user, summaries, instructions, reports, tariffs) {
    "ngInject";
    this.user = user;
    this.summaries = summaries;
    this.instructions = instructions;
    this.reports = reports;
    this.tariffs = tariffs;
    this.day = 0;
  }

  selectDay( day ) {
    this.day = day;
  }
}
