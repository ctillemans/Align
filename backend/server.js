const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes

app.get('/', (req, res) => {
    res.json('Hello from the backend in align');
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})