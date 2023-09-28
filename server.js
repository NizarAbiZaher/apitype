const express = require('express');
const app = express();
const port = 2000;
const cors = require('cors');

app.use(cors())
// send data to index.js
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!'})
})
// PORT
app.listen(port, () => {
    console.log(`Server is working!!`)
})