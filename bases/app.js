const multiplicar = require('./multiplicar/multiplicar');
const argv = require('yargs')
                            .command('listar','Imprime en consola la tabla de multiplicar',{
                              base:{
                                demand: true,
                                alias: 'b'
                              },
                              limite:{
                                alias: 'l',
                                default: 10
                              }
                            })
                            .argv;

let comando = argv._[0];

switch (comando) {
  case 'listar':
    console.log('listar');
  break;
  case 'crear':
    multiplicar.crearArchivo(argv.base).then(
      archivo=>console.log(`Archivo creado: ${archivo}`)
    ).catch(err => console.log(err));
  break;
  default:
    console.log('no aplica');
  break;
}

// multiplicar.crearArchivo(base).then(
//   archivo=>console.log(`Archivo creado: ${archivo}`)
// ).catch(err => console.log(err));
