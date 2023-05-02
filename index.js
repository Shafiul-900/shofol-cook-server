const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const country = require('./data/chef-country.json'); 
const chef = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("shofol is running")
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectChef = chef.find(c => c._id === id);
    res.send(selectChef);
})

app.get('/chef-country/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id === 0){
        res.send(chef);
    }
   else{
    const countryChef = chef.filter(n => parseInt(n.category_id) === id);
    res.send(countryChef);
    } 
})


app.get('/chef-country', (req, res) => {
    res.send(country);
})

app.listen(port, () => {
    console.log(`shofol Api is running on port: ${port}`)
})