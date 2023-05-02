const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const country = require('./data/chef-country.json'); 

app.use(cors());

app.get('/', (req, res) => {
    res.send("shofol is running")
});

app.get('/chef-country', (req, res) => {
    res.send(country);
})

app.listen(port, () => {
    console.log(`shofol Api is running on port: ${port}`)
})