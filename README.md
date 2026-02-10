# Smart Brain – Backend

Backend API for the Smart Brain face recognition application.

## Tech Stack
- Node.js
- Express
- PostgreSQL
- Knex
- Clarifai API
- bcrypt

## Features
- User registration and sign-in
- Password hashing and authentication
- Face detection using the Clarifai API
- Tracks number of images submitted per user

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/georgerachiotis/smart-brain-backend.git
cd smart-brain-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a .env file
```env
DATABASE_URL=your_postgres_connection_string
CLARIFAI_PAT=your_clarifai_api_key
```

### 4. Start the server
```bash
npm start
```
The server will run on http://localhost:3000.

API Endpoints
POST /signin

POST /register

GET /profile/:id

PUT /image

POST /clarifai

Notes
This project was built as part of the Zero To Mastery Web Developer course and is intended for learning purposes.


After pasting:
  ```bash
git add README.md
git commit -m "Add backend README"
git push
```


