var fs = require("fs");



function verInformacion(info){if(appUI){appUI.innerHTML=info;console.log(info);}}
function crearCarpeta(path){fs.mkdir(path, { recursive: true }, (err) => {if (err) throw err;});}
function crearArchivo(path, content){let promesaEscrituraArchivo = new Promise((resolve, reject) => {fs.writeFile(path, content, (error) => {if(error){reject(error);} else {resolve();}});});promesaEscrituraArchivo.then(() => {console.log('file created');}).catch((error) => {console.log('file create err', error);});}



var appUI = document.getElementById('AppUI');
var extensionArchivo = '.les';





function simulacion(){

    this.name = 'Jorge ';

}
function serVivo(){

    this.pregunta = 'como estas?'

}
    



var sim = new simulacion();
var sv = new serVivo();
verInformacion('Hola ' + sim.name + sv.pregunta);
