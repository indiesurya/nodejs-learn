// console.log('Hello World');

const validator = require('validator');
const chalk = require('chalk');

const isEmail = validator.isEmail('putuindie11@gmail.com');
const isMobilePhone = validator.isMobilePhone('089765432324','id-ID');

const textColor = chalk.black.bgBlue('Hello World!');
const message = chalk`Lets learn {bgGreen.black node js} together`
console.log(message);