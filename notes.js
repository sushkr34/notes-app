const fs = require('fs')
const chalk = require('chalk')


const getNotes =  ()=> {
    return 'Your notes...'
}

const addNote =(title,body) =>{
    const notes = loadNotes()
    // const duplicateNotes= notes.filter((note)=>{
    //     return note.title === title
    // })
    
    const duplicateNote = notes.find((note)=>note.title===title)
    if (!duplicateNote){
    notes .push ({
        title:title,
        body:body
    })
   saveNotes(notes)
   console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}
const removeNote = (title)=>{
    const notes=loadNotes()
    const notesToKeep =notes.filter((note) =>{
        return note.title !== title
    })
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Notes removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse(' NO !!! notes found'))
    }
} 

const listNotes =() =>{
    console.log(chalk.inverse('your Notes !!!'))
    const notes =loadNotes()
    notes.forEach ((note)=>{
        console.log(note.title)
    })
    
}

const readNote =(title) =>{
    const notes =loadNotes()
    const note = notes.find((note)=> note.title===title)
    if(note){
        console.log(chalk.inverse('your Notes !!!'))
        console.log(chalk.inverse(note.title))
        console.log(note.title)
    } else {
        console.log(chalk.red.inverse(' NO !!! notes found'))

    }
}

const saveNotes = ( notes ) =>{
     const dataJSON = JSON.stringify(notes)
     fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
        try{
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON=dataBuffer.toString()
            return JSON.parse(dataJSON)  

        } catch (e) {
            return []

        }
    }
       

module.exports = {
    addNote : addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}