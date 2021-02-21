// Creacion de archivos de textos 
// ruta: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
// este app es el archivo principal

const { crearArchivo } = require('./helpers/multiplicar')
const argv  = require('./config/yargs')
const colors =  require('colors')

console.clear()
// console.log(process.argv);
console.log(argv);
//console.log('base: yargs',  argv.base);


// una forma NO RECOMENDADA DE HACERLO
/*
console.log(process.argv);
const [, , argumento = 'base=5'] = process.argv
const [, base = 5 ] = argumento.split('=');
*/

// const base = 1

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.yellow, 'fue creado exitosamente!'))
    .catch( err => console.log(err))


