
const colors = require('../colors/colors')


const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'base de tabla de multiplicar',
        type: 'number'
    })
    .option('l',
        {
            alias: 'listar',
            default: false,
            describe: 'muestra la tabla en consola',
            type: 'boolean'
        })
    .option('h', {
        alias: 'hasta',
        default: 10,
        describe: 'Este es el número hasta donde querés la tabla',
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw colors.error('La base tiene que ser de tipo number');
        }
        return true;
    })
    .argv;

module.exports = argv;