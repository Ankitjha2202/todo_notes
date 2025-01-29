import express from 'express';
const router = express.Router();
import notesController from '../controllers/notesController.js';

router.post('/notes', notesController.createNote);
router.get('/notes', notesController.getAllNotes);
router.put('/notes/:id', notesController.updateNote);
router.delete('/notes/:id', notesController.deleteNote);

export default router;