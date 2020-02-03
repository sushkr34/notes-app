const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Customize yargs ve(rsion
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder :{
        title:{
            describe:'Note title',
            demandOption:true, // cli should been enetered with argvs
            type:'string'//always expecting string 
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'String'
        }
    },
    handler  (argv) {
       notes.addNote(argv.title,argv.body) 
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'String'
        }
    },
    handler(argv) {
      notes.removeNote(argv.title)
        
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler  () {
      notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Read a note',
            demandOption:true,
            type:'String'
        }
    },
    handler  (argv) {
       notes.readNote(argv.title)
    }
})

yargs.parse() // call the functions which are associated with yargs.command