const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea a realizar'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente una tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea una tarea a realizar', {
        descripcion
    })
    .command('actualizar', 'Actualizar la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}