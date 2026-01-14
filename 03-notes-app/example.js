const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const greeenMsg = chalk.green.bold('Success');
console.log(greeenMsg);

console.log(process.argv[2]);
////////////////////////////////////////////////////////////////
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
  console.log('Adding note.');
} else if (command === 'remove') {
  console.log('Removing note.');
}
