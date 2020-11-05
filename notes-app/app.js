const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const { describe, demandOption } = require('yargs')

// Customise yargs version
yargs.version('1.1.0')

// add, remove, read, list'

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove node!',
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read your notes',
    handler: function () {
        console.log('Reading all notes!')
    }
})

// console.log(process.argv)
// console.log(yargs.argv)
yargs.parse()