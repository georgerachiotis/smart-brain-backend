require('dotenv').config();
const express = require('express')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')
const clarifai = require('./controllers/clarifai');

const db = knex({
    client: 'pg',
    connection: {
    connectionString : process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    host: process.env.DATABASE_HOST,
    port: 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    },
});

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())


app.get('/', (req, res)=> { res.send('success') })

app.post('/signin', (req,res) => { signin.handleSignin(req, res, db, bcrypt) }) 

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt) })

app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

app.put('/image', (req, res) => { image.handleImage(req, res, db)})

app.post('/clarifai', clarifai.handleClarifai);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

