const express = require('express');
const app = express();

app.use(express.static(__dirname+"/public"))

app.get('/', (req,res) => {
  let salida = {
    nombre: "Pedro",
    edad:34,
    url: req.url
  }

  res.send(salida);
});

app.listen(3000, () => {
  console.log("Escuchando en puerto 3000");
});
