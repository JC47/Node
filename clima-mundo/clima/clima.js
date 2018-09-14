const axios = require('axios');

const getClima = async(lat,lng) => {
  let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=f18cc1c4176c1f59a69f5aec3559f4cc`);

  if(respuesta.status != 200){
      throw new Error("Error");
  }

  let clima = respuesta.data.weather[0].main;
  let temp = respuesta.data.main.temp;

  return {
    clima,
    temp
  }
}

module.exports = {
  getClima
}
