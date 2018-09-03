const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando =argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
  break;
  case 'listar':
    let result = porHacer.getListado();
    for(let r of result){
      console.log("=============Por Hacer=============".green);
      console.log(r.descripcion);
      console.log("Estado: ",r.completado);
      console.log("===================================".green);
    }
  break;
  case 'actualizar':
   let r = porHacer.actualizar(argv.descripcion, argv.completado);
   console.log(r);
  break;
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
  break;
}
