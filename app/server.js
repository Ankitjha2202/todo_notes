import express from 'express'; // Import the Express framework
import dotenv from 'dotenv'; // Import dotenv for environment variable management
import notesRoutes from './routes/notesRoutes.js'; // Import the notes routes

dotenv.config(); // Load environment variables from .env file
const app = express(); // Create an instance of the Express application
const PORT = process.env.PORT || 3000; // Set the port to the value from environment variables or default to 3000

app.use(express.json()); // Middleware to parse JSON request bodies

// Use the notes routes for any requests to the /api endpoint
app.use('/api', notesRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL to the console
});