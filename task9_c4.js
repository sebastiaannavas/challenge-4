// ---------------------------------------------
//            PRODUCTOS LISTADOS: 4
// ---------------------------------------------
// [1] - TV / PRECIO: $1000 USD
//         - DETALLE: pantalla plana de 50 pulgadas

// [2] - SMARTPHONE / PRECIO: $150 USD
//         - DETALLE: samsung con bluetooth

// [3] - TABLET / PRECIO: $200 USD
//         - DETALLE: hitachi de 14 pulgadas

// [4] - KEYBOARD / PRECIO: $50 USD
//         - DETALLE: con teclas led de 10 colores

// ---------------------------------------------
// NOMBRE DEL USUARIO: KAREN
// PAIS: BANANERO
// ---------------------------------------------
// se debe enviar a Function el nombre del usuario y el pais

const log = console.log;

const titulo = '           productos listados:'.toUpperCase();
  const barra = '-'.repeat(45);
  const candidatos = [
    ["tv", 1000, "pantalla plana de 50 pulgadas"],
    ["smartphone", 150, "samsung con bluetooth"],
    ["tablet", 200, "hitachi de 14 pulgadas"],
    ["keyboard", 50, "con teclas led de 10 colores"]
];
  
function mostrar() {
  
    function listaProductos() {
      console.log(barra);
      console.log(`${titulo} ${candidatos.length}`);
      console.log(barra);
        for(let row = 0 ; row < candidatos.length ; row++) {
        id = row + 1;
        console.log(`[${id}] - ${candidatos[row][0].toUpperCase()} / PRECIO: $${candidatos[row][1]} USD
        - DETALLE: ${candidatos[row][2]} \n`); //visualización (?)
        }
      console.log(barra);
    }
  
    let solicitudDeProductos = (usuario, pais) => {
      console.log(`NOMBRE DEL USUARIO: ${usuario.toUpperCase()}
PAIS: ${pais.toUpperCase()}`); 
      console.log(barra);
    };
    //se transifere la declaracion del let a los parámetros
  
    return {
      productos:function(){
        return listaProductos();
      },
      solicitud:function(usuario, pais) {
        return solicitudDeProductos(usuario, pais);
      }
    }
}
mostrar().productos();
mostrar().solicitud('karen', 'bananero');