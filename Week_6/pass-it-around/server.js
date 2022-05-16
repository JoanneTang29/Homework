const express = require('express');
const app = express();
let bottles = 99;
let newBottles = 0;
let song = '';
const port = 3000;

app.get('/', (req, res) => {
  bottles = 99;
  newBottles = bottles - 1;
  console.log(newBottles);
  song = `${bottles} bottles of beer on the wall <br> ${bottles} bottles of beer <br> <a href='http://localhost:3000/${newBottles}'>Take one down, pass it around</a><br>`;
  res.send(song);
  bottles--;
});

app.get('/:number_of_bottles', (req, res) => {
  console.log(req.params.number_of_bottles);
  // subtract numebr of bottles after updating song
  //create new link
  newBottles = req.params.number_of_bottles - 1;
  console.log(req.params.number_of_bottles);
  if (req.params.number_of_bottles === '0') {
    res.send(
      `${req.params.number_of_bottles} bottles of beer on the wall <br> <a href='http://localhost:3000/'>Start Over</a>`
    );
  } else {
    res.send(
      `${req.params.number_of_bottles} bottles of beer on the wall <br> <a href='http://localhost:3000/${newBottles}'>Take one down, pass it around</a>`
    );
  }
});

app.listen(port, () => {
  console.log('listening on port', port);
});
