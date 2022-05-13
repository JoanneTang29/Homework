const express = require('express');
const app = express();
const port = 3000;

app.get('/howdy/:firstName', function (req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstName);
});

// app.get('/hello/:firstname/:lastname', (req, res) => {
//   // console.log(req.params);
//   console.log('=========================================');
//   console.log(
//     'This is the entire Request Object sent from the browser to the server: '
//   );
//   console.log(req);
//   console.log('========================================');
//   res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
// });

// const plants = [
//   'Monstera Deliciosa',
//   'Corpse Flower',
//   'Elephant-Foot Yam',
//   "Witches' Butter",
// ];

// app.get('/awesome', (req, res) => {
//   //this will never be reached
//   res.send(`
//   <h1>Plants are awesome!</h1>
//   <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
// `);
// });

// app.get('/:indexOfPlantsArray', (req, res) => {
//   //:indexOfPlantsArray can be anything, even awesome
//   res.send(plants[req.params.indexOfPlantsArray]);
// });

app.listen(port, () => {
  console.log('listening on port', port);
});
