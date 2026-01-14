const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customizie yargs version

yargs.version('1.1.0');

// add, remove, read, list

// Craete add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'What to do next',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    // console.log('Adding a new note!', argv);
    console.log('Title: ', argv.title);
    console.log('Body: ', argv.body);
  },
});

// Crete remove command
yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  handler: () => {
    console.log('Removing a note!');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'Listing all the notes',
  handler: () => {
    console.log('List all the notes!');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Reading a note!');
  },
});

// console.log(yargs.argv);
// yargs.argv;
yargs.parse();
