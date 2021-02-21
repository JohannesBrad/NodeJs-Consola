
const fs = require('fs');
const colors =  require('colors')

const crearArchivo = async (base = 1, listar = falsem, hasta = 10) => {

    try {
            
        let salida = '';
        let consola = '';
        //for (let index = 0; index < 13; index++) {
        for (let index = 0; index <= hasta; index++) {

            salida += `${base} x ${index} = ${base * index}\n `;
            // con colores
            consola += `${base} ${ 'x'. green } ${index} ${ '='. green } ${base * index}\n `;
         }
       
         if(listar){
            console.log('=============='.red);
            console.log(' Tabla del:'.green, colors.white( base));
            console.log('=============='.red);
            // console.log(salida);
            console.log(consola);
         }
         // Codigo 02
         fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida) 
        
         //console.log(`Tabla del: ${base} creado exitosamente!`);
         //resolve(`Tabla del: ${base}.txt`);
         return `Tabla del:${base}.txt`;
    
    } catch (error) {
      console.log(error);  
    }

//    return new Promise ( (resolve, rejects) => { 

    
}
module.exports = {
    crearArchivo
}




 /* Codigo 01
 fs.writeFile(`Tabla-${base}.txt`, salida, (err) => {
     if(err)throw err;
     console.log(`Tabla del ${base} creado`);
 })
 console.log(salida); 
 
 */