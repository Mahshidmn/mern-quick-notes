const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


//POST /api/notes
router.post('/', notesCtrl.create);
//DELETE /api/notes/:id
router.delete('/:id', notesCtrl.delete);


module.exports = router;