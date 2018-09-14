const lugar = require('./lugar/lugar');
const clim = require('./clima/clima');
const argv  = require('yargs').options({
direccion:{
  alias: 'd',
  desc: 'direccion',
  demand: true
}
}).argv;


let getInfo = async (dir) => {

  try{
    let coors = await lugar.getLugarLatLng(dir);
    let clima = await clim.getClima(coors.lat,coors.lng);

    return `El clima en ${coors.addres} es de ${clima.temp}, desc: ${clima.clima}`;
  }catch(e){
    return `No se pudo hacer el acá`;
  }

}


getInfo(argv.direccion).then( res => {
  console.log(res);
}).
catch( err => {
  console.log(err);
});
