const { request } = require('express');
const express = require('express'); //express starts a server
const app = express();
const morgan = require('morgan'); //acts between calls and lets us see the calls to the server

//settings
app.set('port', process.env.PORT || 3000); //env.port es por si ya existe un puerto predefinido
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies')); //mi ruta siempre empieza con /api/movies/ y despues va el ruteo del archivo
app.use('/api/users', require('./routes/users'));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});