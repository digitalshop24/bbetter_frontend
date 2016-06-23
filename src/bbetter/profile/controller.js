export default class ProfileCtrl {
  constructor(summaries, instructions, reports, tariffs) {
    "ngInject";
    this.summaries = summaries;
    this.instructions = instructions;
    this.reports = reports;
    this.tariffs = tariffs;
  }
}
