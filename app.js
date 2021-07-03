const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
const helmet = require('helmet'); //HTTP Headers
const morgan = require('morgan'); //Logging
//App Setup
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('local'));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'))
app.set('json spaces', 2);
//Middlewares

//Routes
app.get('/', (req, res) => {
    // res.json({message: 'ROOT of IMS BACKEND EXPRESS'})
    res.render('index')
});




//Listen
app.listen(PORT, () => {
    console.log(`Live on port ${PORT}`)
});