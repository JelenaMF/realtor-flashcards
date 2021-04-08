const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Realtor Rocks')
});

app.get('/cards', (req, res) => {
    res.locals.prompt = "zoning laws";
    res.render('card');
});

app.listen(3000);