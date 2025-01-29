import pool from '../db/db.js';

// Function to create a new note
const createNote = async (req, res) => {
    const { title, description } = req.body; // Destructure title and description from request body
    if (!title) {
        return res.status(400).json({ error: 'Title is required' }); // Validate that title is provided
    }
    try {
        // Insert the new note into the database and return the created note
        const result = await pool.query(
            'INSERT INTO notes (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        );
        res.status(201).json(result.rows[0]); // Respond with the created note
    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).json({ error: 'Internal server error' }); // Respond with a server error
    }
};

// Function to retrieve all notes
const getAllNotes = async (req, res) => {
    try {
        // Query the database for all notes, ordered by creation date
        const result = await pool.query('SELECT * FROM notes ORDER BY created_at DESC');
        res.status(200).json(result.rows); // Respond with the list of notes
    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).json({ error: 'Internal server error' }); // Respond with a server error
    }
};

// Function to update an existing note by ID
const updateNote = async (req, res) => {
    const { id } = req.params; // Get the note ID from the request parameters
    const { title, description } = req.body; // Destructure title and description from request body
    if (!title) {
        return res.status(400).json({ error: 'Title is required' }); // Validate that title is provided
    }
    try {
        // Update the note in the database and return the updated note
        const result = await pool.query(
            'UPDATE notes SET title = $1, description = $2 WHERE id = $3 RETURNING *',
            [title, description, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Note not found' }); // Handle case where note does not exist
        }
        res.status(200).json(result.rows[0]); // Respond with the updated note
    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).json({ error: 'Internal server error' }); // Respond with a server error
    }
};

// Function to delete a note by ID
const deleteNote = async (req, res) => {
    const { id } = req.params; // Get the note ID from the request parameters
    try {
        // Delete the note from the database and return the deleted note
        const result = await pool.query('DELETE FROM notes WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Note not found' }); // Handle case where note does not exist
        }
        res.status(200).json({ message: 'Note deleted successfully' }); // Respond with success message
    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).json({ error: 'Internal server error' }); // Respond with a server error
    }
};

// Export the controller functions
export default {
    createNote,
    getAllNotes,
    updateNote,
    deleteNote,
};