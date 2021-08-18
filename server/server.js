const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(require('./routes'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/car-wash', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));