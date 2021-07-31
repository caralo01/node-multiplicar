const argv = require('yargs')
.option('b', {
  alias: 'base',
  type: 'number',
  describe: "Es la base de la tabla de multiplicar",
  demandOption: true
}).option('l', {
  alias: "list",
  type: 'boolean',
  describe: "Muestra la tabla en consola",
  demandOption: false,
  default: false
}).option('t', {
  alias: "to",
  type: 'number',
  describe: "Este es el número hasta donde quieres la tabla",
  demandOption: false,
  default: 10
})
.check((argv, options) => {
  if(isNaN(argv.base)) {
    throw 'La base tiene que ser un número';
  }
  return true;
})
.argv;

module.exports = argv;