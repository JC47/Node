const axios = require('axios');

const getLugarLatLng = async(dir) => {
  let encodeURL = encodeURI(dir);
  let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDHqR0kml3ReT-AseG3wApZIP6m5olbaFA`);

  if(respuesta.data.status === 'ZERO_RESULTS'){
      throw new Error("No hay resultados");
  }

  let addres = respuesta.data.results[0].formatted_address;
  let lat = respuesta.data.results[0].geometry.location.lat;
  let lng = respuesta.data.results[0].geometry.location.lng;

  return {
    addres,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}
