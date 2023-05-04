const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/chef-country.json');
const news = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon in running');
});

app.get('/chef-country', (req, res) => {
    res.send(categories);
})

app.get('/chef', (req, res) => {
    res.send(news);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get('/chef-country/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news);
    }
    else{
        const categoriesNews = news.filter(n => n.category_id === id);
        res.send(categoriesNews); 
    }
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
});