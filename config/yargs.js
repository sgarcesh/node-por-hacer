//definicion de valores de entrada
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

//definicion de argumentos de etrada
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista de tareas', {
        descripcion
    })
    .command('listar', 'Muestra el listado de tareas por hacer', {})
    .help()
    .argv;

module.exports = {
    argv
};