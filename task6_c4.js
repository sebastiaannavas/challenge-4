// eliminar el primer y ultimo elemento del Array

const log = console.log;
  
const listaDeNombres = ["karen", "nicky", "michael", "frank"];

let eliminarNombres = () => {
    listaDeNombres.shift();
    listaDeNombres.pop();
    return listaDeNombres;
};
console.log(eliminarNombres());