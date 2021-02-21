const { describe } = require('yargs')

const argv = require('yargs')
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base o numero para multiplicar'
})
.option('l', {
    alias:'listar',
    type: 'boolean',
    demandOption: true,
    default: false,
    describe: 'Es para listar'
})
.option('h', {
    alias:'hasta',
    type: 'number',
    default: 10,
    describe: 'Este es el numero hasta donde se quiere la tabla'
})
.check( (argv, options ) => {
    if (isNaN(argv.b)) {
        throw ("La base tiene que ser un número.")
    }
    return true
})
.argv

module.exports = argv