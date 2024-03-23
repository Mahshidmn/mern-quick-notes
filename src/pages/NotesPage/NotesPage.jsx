import { useState } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NoteForm from '../../components/NoteForm/NoteForm';
import NotesList from '../../components/NotesList/NoteList'


function NotesPage() {
    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        // client send request to server to create a new note using notesAPI.createNote(note) 
        // and server response is a json object which is the newNote, and then react use
        //setNotes to render the newNote
        const newNote = await notesAPI.createNote(note);
        // console.log('new Note:', newNote);
        setNotes([...notes, newNote]);
        //  console.log(notes);
    }

    async function deleteNote(id) {
        await notesAPI.deleteNote(id);
        const updatedNotes = notes.filter((n) => n._id !== id);
        setNotes(updatedNotes);
        console.log(updatedNotes);
    }
    return (
        <>
          <div>
            <h2>Notes Page</h2>
            <NoteForm addNote={addNote}/>
            <NotesList notes={notes} deleteNote={deleteNote}/>
          </div>
        </>
    )
}

export default NotesPage;