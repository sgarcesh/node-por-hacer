// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======= Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================\n'.green);
        }

        break;

    case 'actualizar':

        let resultado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (resultado) {
            console.log('Tarea Actualizada');
        } else {
            console.log('Error en la actualizacion');
        }
        break;

    case 'borrar':

        let res = porHacer.borrar(argv.descripcion);

        if (res) {
            console.log(`Tarea ${ argv.descripcion } borrada`.green);
        } else {
            console.log(`Hubo un problema al borrar la tarea ${ argv.descripcion }`.red);
        }

        break;

    default:
        console.log('Commando no es reconocido');

};