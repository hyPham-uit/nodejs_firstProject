const path = require('path');
const express = require('express'); // get framework express
const morgan = require('morgan'); //use for watch log when app has reloaded
const handlebars = require('express-handlebars'); //handlebar is use to render frontend
const app = express();
var methodOverride = require('method-override'); //use to override POST in a form to put, patch, ...

const route = require('./routes'); //this file contain routes of app
const db = require('./config/db/index');
const SortMiddleware = require('./app/middleware/SortMiddleware'); //declare middleware used
//Connect mongodb
db.connect();

const port = 3000; //run web at port 3000

//HTTP logger
//app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public'))); //use to load static files in folder public, just understand that http://localhost:3000 is call to folder public

app.use(
    express.urlencoded({
        //call middleware to handling data from form data submit method POST
        extended: true,
    }),
);

//call middleware to handle code javascript submit: XMLHttpRequest, fetch, axios
app.use(express.json());

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', //change extension name of file to hbs
        helpers: {
            //use to make function support for render data, variable is call in {{}}
            sum: (a, b) => a + b,
        },
    }),
);
//Custom middleware
app.use(SortMiddleware);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); //get the place save the views
//dirname là vị trí hiện tại, tức là index.js và trỏ tới folder resources/views ngang cấp với file js
app.use(methodOverride('_method'));

route(app);

//127.0.0.1=>localhost
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
