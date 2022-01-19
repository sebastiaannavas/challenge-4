// agregar nuevo nombre al principio y al final del Array

const log = console.log;

const nombres = ["karen", "nicky", "michael", "frank"];
  
let agregarNombre = (nombre) => {
  nombres.unshift(nombre);
  nombres.push(nombre);
  return nombres;
};

const input = agregarNombre('foo');
console.log(input);