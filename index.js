/**
 * @Author: Your name
 * @Date:   2023-04-21 14:58:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-06-10 00:00:51
 */
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const port = 3000
const router = express()
router.use(cors());


mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('error', (error) => {
    console.log(error)
})


database.once('connected', () => {
    console.log('yes Database Connected');
})

const app = express();
app.use(cors())
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/routes');
app.use('/api', routes)


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
