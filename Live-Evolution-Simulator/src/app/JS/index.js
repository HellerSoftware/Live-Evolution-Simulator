
//     C O N F I G U R A C I O N :
//
//
var nombreProyecto             =             'proyecto1'                        ;             //Nombre del proyecto, escribe uno nuevo para crearlo o uno existente para continuarlo
//
//
var numeroEspecies             =              4                                 ;             //determina con cuantas especies se desarroyara la simulacion, el valor debe estar entre 2-5 aunque recomendamos dejarlo en 4
var numeroEjemplaresPorEspecie =              4                                 ;             //cuantos ejemplares de cada especie hay en la simulacion, valor entre 3-5, aunque recomendamos dejarlo en 4
var nombreEspecie1             =              'patata1'                         ;
var nombreEspecie2             =              'patata2'                         ;
var nombreEspecie3             =              'patata3'                         ;
var nombreEspecie4             =              'patata4'                         ;
var nombreEspecie5             =              'patata5'                         ;
//
//
var extensionArchivo           =             '.les'                             ;              //esta es la extension que tendran los archivos que guardan toda la informacion, no se recomienda cambiarla.
var directorioProyectos        =             'C:/LES/proyectos/'                ;              //directorio donde se encuetran todos los proyectos, puedes cambiarlo pero siempre debe seguir la estructura c:/.../LES/proyectos/
var tiempoMaximoParaMutacion   =              15   /*segundos*/                 ;               //tiempo maximo entre cada mutacion en caso de que no se produzca naturalmente, valor entre 3-25 no se recomienda bajarlo de 8 ni subirlo de 16
//
//
//


















//modulo fs
var fs = require("fs");








//variable del combre del proyecto en mayusculas
var nombreProyectoMayusculas = nombreProyecto.toUpperCase();
//texto de la copia de la configuracion
var copiaConfiguracionBase = '\t\t\t' + nombreProyectoMayusculas + '\n\n\n\tC O N F I G U R A C I O N :\n\n     - numero de especies:                 ' + numeroEspecies + '\n     - numero de ejemplares por especie:   ' + numeroEjemplaresPorEspecie + '\n\n     - nombre de las especies: \n      - ' + nombreEspecie1 + '\n      - ' + nombreEspecie2 + '\n      - ' + nombreEspecie3 + '\n      - ' + nombreEspecie4 + '\n      - ' + nombreEspecie5 + '\n\n     - extension de los archivos:          ' + extensionArchivo + '\n\n     - directorio de los proyectos:        ' + directorioProyectos + '\n\n     - tiempo maximo para mutaciones:      ' + tiempoMaximoParaMutacion + ' segundos';
//funcion para ver la configuracion
function verConfiguracion(){console.log(copiaConfiguracionBase);}



//funciones basicas
//funcion para ver la informacion por pantalla y en la consola
function verInformacion(info){if(appUI){appUI.innerHTML=info;console.log(info);}}
//funcion para crear una carpeta en un determinado directorio
function crearCarpeta(path){fs.mkdir(path, { recursive: true }, (err) => {if (err) throw err;});}
//funcion para crear archivos en un determinado directorio
function crearArchivo(path, content){fs.writeFile(path, content, (err) => {if(err) throw err;});}



var appUI = document.getElementById('AppUI');



function directorioProyectosVerificador(){
    if (fs.existsSync(directorioProyectos)){
        console.log('el directorio de proyectos existe: ' + directorioProyectos);
    }
    else{
        var directorioProyectosParaCrear = directorioProyectos.split('/');
        if(directorioProyectosParaCrear[0] == 'c:' || directorioProyectosParaCrear[0] == 'C:'){
            for(var i = 1; i < directorioProyectosParaCrear.length; i++){
                var im = i-1;
                directorioProyectosParaCrear[i] = directorioProyectosParaCrear[im] + '/' + directorioProyectosParaCrear[i];
                crearCarpeta(directorioProyectosParaCrear[i]);
                console.log('carpeta creada: ' + directorioProyectosParaCrear[i])
            }
        }
        else{
            directorioProyectos = 'C:/' + directorioProyectos;
        }
        directorioProyectosVerificador();
    }
}


function directorioProyectoActualVerificador(){
    var directorioProyectoActual = directorioProyectos + '/' + nombreProyecto;
    if(fs.existsSync(directorioProyectoActual)){
        console.log('El proyecto actual ya existe');
        alert('Este proyecto ya existe.\nCambie el nombre del proyecto para crear uno nuevo');
        close();
    }
    else{
        //crearCarpeta(directorioProyectoActual);
    }
}





function simulacion(){

    this.name = 'Jorge ';

}
function serVivo(nombre){

    this.nombreEspecie = nombre;
    this.pregunta = 'como estas?'

}
    



var sim = new simulacion();
var e1 = new serVivo(nombreEspecie1);
var e2 = new serVivo(nombreEspecie2);
var e3 = new serVivo(nombreEspecie3);
var e4 = new serVivo(nombreEspecie4);
var e5 = new serVivo(nombreEspecie5);


verConfiguracion();
directorioProyectosVerificador();
directorioProyectoActualVerificador();
verInformacion('HOLA MUNDO');