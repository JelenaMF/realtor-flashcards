const express = require('express');

const http = require('http');

const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.urlencoded({extended: false}))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/index', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

express()
    .use(mainRoutes)
    .use('/cards', cardRoutes)
    .use((req, res, next) => {
    const err = new Error('Oh no... Something went wrong.');
    next();
}).use((req, res, next) => {
   
    next();
    
}).use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}).use((err, req, res, next) => {
    res.locals.error = err; 
    res.status(err.status);
    res.render('error');
}); 

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/pain'});
    res.render('/index');
}).listen(3000, () => {

    console.log(`Server running at localhost: 3000`);

});