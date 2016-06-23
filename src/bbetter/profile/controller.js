'use strict';
export default class ProfileCtrl {
  constructor(summaries, instructions, reports) {
    "ngInject";
    this.summaries = summaries;
    this.instructions = instructions;
    this.reports = reports;
  }
}
