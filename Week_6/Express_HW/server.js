const express = require('express');
const app = express();

const port = 3000;

let magicResponse = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

app.get('/greeting', (req, res) => {
  res.send('Hello stranger');
});

app.get('/greeting/:name', (req, res) => {
  res.send(`Hello ${req.params['name']}`);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
  const { total, tipPercentage } = req.params;
  const tip = total * (tipPercentage / 100);
  tip.toString;
  res.send(200, tip);
});

app.get('/magic/:question', (req, res) => {
  const randomResponse =
    magicResponse[Math.floor(Math.random() * magicResponse.length)];
  res.send(200, `<h1>${req.params['question']}? ${randomResponse} </h1>`);
});

app.listen(port, () => {
  console.log('listening on port', port);
});
