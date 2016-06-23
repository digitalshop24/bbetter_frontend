export default class VideosCtrl {
  constructor(api, user) {
    "ngInject";
    this.api = api;
    this.user = user;

    this.reports = this.updateReportsToBeLengthOf6(this.reports);

    this.selectedInstruction = this.instructions[0];
    this.selectedReport = this.reports[0];

    this.instructionsDisplayed = true;
  }

  displayInstructions() {
    this.instructionsDisplayed = true;
  }

  displayReports() {
    this.instructionsDisplayed = false;
  }

  selectInstruction(instruction) {
    this.selectedInstruction = instruction;
  }

  selectReport(report) {
    this.selectedReport = report;
  }

  updateReportsToBeLengthOf6(reports) {
    const updated = [];

    for (let i = 1; i <= 6; ++i) {
      const element = reports.find(e => e.day === i);
      if (element) {
        updated.push(element);
      } else {
        updated.push({day: i});
      }
    }

    return updated;
  }

  uploadVideo(day, youtubeUrl) {
    const {token: authToken} = this.user;
    const code = youtubeUrl.substr(youtubeUrl.length - 11); // 11 lenth of youtube code

    return this.api.postV1Videos({authToken, day, youtube_code: code})
      .then(report => {
        const {day} = report;

        this.reports[day - 1] = report;

        this.selectReport(report);
      })
      .catch(response => console.error(response));
  }
}
