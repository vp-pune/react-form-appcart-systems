const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());

let students = [];

// Endpoint to submit form data
app.post('/userAPI', (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).send(student);
});

// Endpoint to get form data
app.get('/userAPI', (req, res) => {
    res.status(200).send(students);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
