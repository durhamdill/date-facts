const moment = require('moment');

const chalk = require('chalk');

// let date = moment("YYYY");

let date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

console.log(`It is ${date}.`);

let doY = moment().format("DDDo");
console.log(`It is the ${doY} day of the year.`);

let now = moment().format("LT");
let then = undefined;

console.log(now);
