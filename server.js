'use strict';

const express = require('express');
// Constants
const PORT = 5555;
const HOST = '0.0.0.0';  //local host
// App
const app = express();
app.get('/', (req, res) => {
  res.send('welcome to bash :) \n');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
