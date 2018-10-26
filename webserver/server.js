const express = require('express');

const app = express();

app.get('/', function (req,res) {
  res.send("Hola Penny x2");
});

app.listen(3000);
