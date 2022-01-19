// pedir una nota y mostrar la calificacion entre corchetes

const log = console.log;

function calificarNota(nota) {
    if(nota <= 1) {
      console.log(`[ ${rango[0]} ]`);
    }
    else if(nota == 2 || nota == 3) {
      console.log(`[ ${rango[1]} ]`);
    }
    else if(nota == 4 || nota == 5) {
      console.log(`[ ${rango[2]} ]`);
    }
    else if(nota == 6 || nota == 7) {
      console.log(`[ ${rango[3]} ]`);
    }
    else if(nota == 8 || nota == 9) {
      console.log(`[ ${rango[4]} ]`);
    }
    else if(nota == 10) {
      console.log(`[ ${rango[5]} ]`);
    }else {
      console.log('La nota no existe');
    }
}

let rango = ['Muy deficiente', 'Insuficiente', 'Suficiente', 'Bien', 'Notable', 'Sobresaliente'];
var nota = 10;
calificarNota(nota);