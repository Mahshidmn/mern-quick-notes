import { useState } from "react";

function NoteForm({addNote}) {

    const [newNote, setNewNote] = useState('');

    const _handleSubmit = (event) => {
        event.preventDefault();
        addNote(newNote);
        setNewNote('');
    }
    return (
        <form onSubmit={_handleSubmit}>
            <label htmlFor="note">
                Note:
            </label>
            <textarea name="#" id="note" value={newNote} onChange=
            {(event) => setNewNote(event.target.value)}></textarea>
            <label htmlFor="add">
                Add Note:
            </label>
            <button id="add">Add Note</button>
        </form>
    )
}

export default NoteForm;