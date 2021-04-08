const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Realtor Rocks')
});

app.listen(3000);