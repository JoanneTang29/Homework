//npm init -y
//npm i express

const express = require('express');
// const fruits = require('./models/fruits');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

//--------------- Links env

app.set('view engine', 'jsx');
//----- needs 2 be viewable

app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

// ---------- require statement

//... and then farther down the file
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

const fruitData = require('./models/fruits');

app.get('/fruits/', (req, res) => {
  res.render('Index', { fruits: fruitData });
});

app.get('/fruits/new', (req, res) => {
  res.render('New');
});

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.render('Show', { fruit: fruitData[req.params.indexOfFruitsArray] });
});

// POST REQUEST
app.post('/fruits', (req, res) => {
  console.log('here is the request', req.body);
  if (req.body.readyToEat === 'on') {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruitData.push(req.body);
  console.log(fruitData);
  res.redirect('/fruits'); //send the user back to /fruits
});

app.listen(3000, () => {
  console.log(`currently listening on PORT ${process.env.PORT}`);
});
