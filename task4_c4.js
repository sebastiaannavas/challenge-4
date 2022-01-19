// mostrar 'hola mundo desde javascript' del Array multidimensional

const log = console.log;

// el STRING arroja letra por letra si se trata como matriz.
  
function multiDArray() {
    const a = [
        "mundo",
        [
        ["hola"]
        ],
        "desde",
        ["javascript"]
    ];
    console.log(`${a[1][0]} ${a[0]}, ${a[2]} ${a[3][0]}`);
}
multiDArray();