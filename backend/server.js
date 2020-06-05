const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//routes

app.get('/', (req, res) => {
    res.json('Hello from the backend in align');
})

mongoose.connect('mongodb://'+ process.env.MONGO_HOST + ':' + process.env.MONGO_PORT +'/' + process.env.MONGO_DATABASE, 
{useNewUrlParser: true})
    .then(() => {
        console.log('connected to the database');
    }).catch((err) => {
        console.log('cannot connect to the database', err)
        console.log('mongodb://'+ process.env.MONGO_HOST + ':' + process.env.MONGO_PORT +'/' + process.env.MONGO_DATABASE)
        process.exit;
    })

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})