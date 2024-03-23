import { useState } from "react";

export default function NoteList({notes, deleteNote}) {
    // console.log(notes);

    const [reverse, setReverse] = useState(false);

    if (notes.length === 0) {
        return <p>No Notes Yet!</p>
    }

    const notesList = notes.map((n) => (
        <div key={n._id}>
            <p>
                { new Date(n.createdAt).toLocaleString() }
            </p>
            <p>
                {n.text}
                <button onClick={() => deleteNote(n._id)} title="Delete Note">&times;</button>
            </p>
        </div>
    ))

    

    return (
        <div>
            <button onClick={() => setReverse(!reverse)} title="Reverse Notes Order">
               ▲ | ▼ 
            </button>
            {
               
                reverse ? notesList.reverse() : notesList
            }
        </div>    

    )
}