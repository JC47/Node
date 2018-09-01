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


let getEmpleado = (id)=>{

  return new Promise((resolve,reject) => {
    let empleadodb = empleados.find(empleado => {
      return empleado.id === id;
    });
    if(!empleadodb){
      reject(`No hay empleado ${id}`);
    }
    else{
      resolve(empleadodb);
    }
  });
}

let getSalario = (empleado) => {

  return new Promise( (resolve,reject) => {
    let s = salarios.find(salario => {
      return salario.id === empleado.id;
    });
    if(!s){
      reject(`No hay salario para ${empleado.nombre}`);
    }
    else{
      var x = {nombre:empleado.nombre,salario:s.monto};
      resolve(x);
    }
  });
}

getEmpleado(3).then( empleado => {
  return getSalario(empleado)
}).then( salario => {
  console.log(salario);
}).catch(err => {console.log(err);});
