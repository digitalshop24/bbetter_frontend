export default class VideosCtrl {
  constructor(api, user) {
    "ngInject";
    this.api = api;
    this.user = user;
    this.link = 'https://www.youtube.com/watch?v=OPmOXJtxxoo';
    console.log('link',this.link);

    this.reports = this.updateReportsToBeLengthOf6(this.reports);
    console.log(this.reports);

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

  uploadVideo(youtubeUrl) {
    const {token: authToken} = this.user;

    return this.api.postV1Videos({authToken, youtube_code: youtubeUrl})
      .then(report => {
        const {day} = report;

        this.reports[day - 1] = report;

        this.selectReport(report);
      })
      .catch(response => console.error(response));
  }
}
