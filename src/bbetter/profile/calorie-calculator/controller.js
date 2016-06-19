import activities from './activities';

export default class CaloryCalculatorCtrl {
  constructor() {
    this.activities = activities;
  }
  calculate(parameters) {
    const {weight, height, age, sex, activity} = parameters;

    const weightNumeric = parseFloat(weight);
    const heightNumeric = parseFloat(height);
    const ageNumeric = parseFloat(age);
    const activityNumeric = parseFloat(activity);

    const calories = activityNumeric * (
      10 * weightNumeric +
      6.25 * heightNumeric -
      5 * ageNumeric +
      (sex === "male" ? 5 : -161)
    );

    this.caloriesPerDay = calories.toFixed();
  }
}
