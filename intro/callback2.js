let empleados = [
  {
    id:1,
    nombre:"Javier"
  },
  {
    id:2,
    nombre:"Juan"
  },
  {
    id:3,
    nombre:"Carlos"
  }
];

let salarios = [
  {
    id:1,
    monto:1000
  },
  {
    id:2,
    monto:2000
  }
];

let getSalario = (empleado, callback) => {
  let s = salarios.find(salario => {
    return salario.id === empleado.id;
  });
  if(!s){
    callback(`No hay salario para ${empleado.nombre}`);
  }
  else{
    let x = {
      nombre:empleado.nombre,
      salario:s.monto
    };
    callback(null, x);
  }
}

let getEmpleado = (id, callback)=>{
  let empleadodb = empleados.find(empleado => {
    return empleado.id === id;
  });
  if(!empleadodb){
    callback(`No hay empleado ${id}`);
  }
  else{
    callback(null, empleadodb);
  }
}

getEmpleado(3, (err,empleado) => {
  if(!err){
      getSalario(empleado, (err2, completo) => {
        if(!err2){
          console.log(completo);
        }
        else{
          console.log(err2);
        }
      });
  }
  else{
    console.log(err);
  }

});
