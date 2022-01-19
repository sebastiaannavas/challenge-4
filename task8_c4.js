// --------------------
//   LISTA DE COMIDAS  
// --------------------
// [1] - ensalada      
// [2] - pasta
// [3] - sopa
// [4] - pizza
// [5] - papas fritas  
// --------------------

const log = console.log;

//idx++ => idx + idx / idx + 1 => 0 + 1 = 1...
  
const title = '  lista de comidas'.toUpperCase();
const bar = '-'.repeat(20);
const comidas = ["ensalada", "pasta", "sopa", "pizza", "papas fritas"];

function show() {

  console.log(bar);
  console.log(title);
  console.log(bar);

  return listaComida = () => {
    for(let idx = 0 ; idx < comidas.length ; idx++) {
      id = idx + 1; //let const var (?)
      console.log(`[${id}] - ${comidas[idx]}`);
    }
    console.log(bar);
  };
}
show()();