const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var passport = require('passport');
const users = require('./models/User/userRoutes');
const todos = require('./models/Todo/toDoRoutes');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

//  passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/todos', todos);
app.use('/users', users);
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})