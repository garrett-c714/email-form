const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.get('/', (request, response) => {
    response.send('Nodemailer Test');
});


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})