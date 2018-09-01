const argv = require('yargs').argv;

let comando =argv._[0];

switch (comando) {
  case 'crear':
  console.log("crear");
  break;
  case 'listar':
  console.log("listar");
  break;
  case 'actualizar':
  console.log("actualizar");
  break;
}
