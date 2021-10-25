const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const URI =
  'mongodb+srv://leo:abcd1234@boiler-plate.cz8ay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
  .connect(URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
