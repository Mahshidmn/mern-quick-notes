
const Note = require('../../models/note');

async function create (req, res) {
try {
    const userId =req.user._id;
    const newNoteData = {
        text: req.body.text,
        user: userId
    }

    // const user = await User.findById(userId);
    // user.notes.push(newNote);
    // await user.save();
    const newNote = new Note(newNoteData);
    await newNote.save();
    // console.log(newNote);
    res.json(newNote);
 

} catch(err) {
    res.status(400).json({error: err.message});
}
}


async function deleteNote(req, res) {
    try {
       
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({error: 'Note not found'});
        }
        await note.deleteOne();
        res.json({message: 'Note successfully deleted', id: req.params.id});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}


module.exports = {
    create,
    delete: deleteNote
}