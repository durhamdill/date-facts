const moment = require('moment');

const chalk = require('chalk');

// LINE 1:

let date = chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

console.log(`It is ${date}.`);

// LINE 2:

let doY = chalk.magenta.bold(moment().format("DDDo"));
console.log(`It is the ${doY} day of the year.`);

// LINE 3:

let now = moment();
let then = moment().hour(0).minute(0).second(0);
let seconds = chalk.blueBright.bold(now.diff(then, 'seconds'));
console.log(`It is ${seconds} seconds into the day.`);

// LINE 4:
let leapYear = moment().isLeapYear();
if (leapYear) {
  console.log("It" + chalk.green.bold(" is ") + "a Leap Year!");
} else {
  console.log("It" + chalk.green.bold(" is not ") + "a Leap Year.");
}

// LINE 5:
let dayST = moment().isDST();
if (dayST) {
  console.log("It" + chalk.red(" is ") + "Daylight Savings Time!");
} else {
  console.log("It" + chalk.red(" is not ") + "Daylight Savings Time.");
}
