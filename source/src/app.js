const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

require('./database');

//Init
const app = express();

//Handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: ".hbs",
    helpers: require('./lib/handlebars')

}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/contacts.routes'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;