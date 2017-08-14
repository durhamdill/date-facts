const moment = require('moment');

const chalk = require('chalk');

// LINE 1:

let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

console.log(`It is ${date}.`);

// LINE 2:

let doY = moment().format("DDDo");
console.log(`It is the ${doY} day of the year.`);

// LINE 3:

let now = moment();
let then = moment().hour(0).minute(0).second(0);
let seconds = now.diff(then, 'seconds');
console.log(`It is ${seconds} seconds into the day.`);

// LINE 4:
let leapYear = moment().isLeapYear();
if (leapYear) {
  console.log("It is a Leap Year!");
} else {
  console.log("It is not a Leap Year.");
}

// LINE 5:
let dayST = moment().isDST();
if (dayST) {
  console.log("It is Daylight Savings Time!");
} else {
  console.log("It is not Daylight Savings Time.");
}
