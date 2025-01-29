# Todo Notes API

A simple RESTful API for managing notes using Node.js, Express, and PostgreSQL. This project allows users to create, read, update, and delete notes.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing the API with curl](#testing-the-api-with-curl)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Create new notes
- Retrieve all notes
- Update existing notes
- Delete notes

## Technologies

- Node.js
- Express
- PostgreSQL
- dotenv (for environment variable management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo_notes.git
   cd todo_notes
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up your PostgreSQL database and create a `notes` table with the following structure:
   ```sql
   CREATE TABLE notes (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. Create a `.env` file in the root directory and add your database configuration:
   ```plaintext
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_PORT=your_db_port
   PORT=3000
   ```

## Usage

To start the server, run:
```bash
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- **POST** `/api/notes` - Create a new note
- **GET** `/api/notes` - Retrieve all notes
- **PUT** `/api/notes/:id` - Update a note by ID
- **DELETE** `/api/notes/:id` - Delete a note by ID

## Testing the API with curl

You can use `curl` to interact with the API and check its functionality. Here are some examples:

### Creating a Note

To create a new note, use the following command:

```bash
curl -X POST http://localhost:3000/api/notes -H "Content-Type: application/json" -d '{"title": "My First Note", "description": "This is a test note"}'
```

### Retrieving All Notes

To retrieve all notes, use the following command:

```bash
curl http://localhost:3000/api/notes
```

Using `curl` is a convenient way to test and interact with your API directly from the command line.

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `DB_HOST`: Database host
- `DB_USER`: Database user
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `DB_PORT`: Database port
- `PORT`: Port for the Express server (default is 3000)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.