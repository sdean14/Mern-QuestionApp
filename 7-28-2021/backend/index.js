const express = require('express') //like rails whole backend
const app = express();

const cors = require('cors'); //security mesure

const allow = ['http://localhost:3000'];

app.use(cors());

app.use(express.json());


const questions = require('./routes/api/questions')

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology })
  .then(() => console.log('mongo! go!'))
  .catch(err => console.log(err, 'oh erro'))


app.use('/api/questions', questions);

app.get('/STUFF', (req, res) => res.send('its working! wooo (^w^)/')) //.get has 2 args, 1st string

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server is up on port ${port}`))












