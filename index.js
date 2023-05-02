const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("shofol is running")
});

app.listen(port, () => {
    console.log(`shofol Api is running on port: ${port}`)
})