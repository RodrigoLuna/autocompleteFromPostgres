const express = require('express');
const database = require('./database');
const app = express();

app.get('/health', function (req,res) {
    res.send('OK');
})

app.get('/catalogo', (req, res) => {
    database.getCatalogue().then(data => {
        res.status(200).json(data)
      })
      .catch(e => {
        res.status(523).json({ error: e })
      })
})

app.listen(3000, () => console.log('LISTENING ON 3000'))