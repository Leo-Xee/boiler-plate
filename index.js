const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = 3000;

const config = require('./config/key');

const { User } = require('./models/User');

app.use(bodyParse.urlencoded({ extended: true }));

app.use(bodyParse.json());

const mongoose = require('mongoose');
const URI = config.mongoURI;
mongoose
  .connect(URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log(e));

app.get('/', (req, res) => {
  res.send('Hello World, 안녕하세요!');
});

app.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      userInfo,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
