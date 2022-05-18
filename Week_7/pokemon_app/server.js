const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon/', (req, res) => {
  res.render('Index', { pokemon: pokemon });
});

app.get('/pokemon/:id', (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log('listening on port', port);
});
