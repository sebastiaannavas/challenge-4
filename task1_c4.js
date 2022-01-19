// pedir edad e indicar que puede conducir si > 18

const log = console.log;

function validarEdad(edad) {
    switch(typeof edad) {
        case 'number':
        if(edad > 18) {
            console.log('Usted puede conducir');
        } else {
            console.log('Usted no puede conducir aún');
        }
        break;
        case 'string':
        console.log('Por favor, ingrese un número');
        break;
    }
}
  
var edad = 21;
validarEdad(edad);