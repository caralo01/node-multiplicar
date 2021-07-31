
const { crearArchivo } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

// BASE IN CODE

// const base = 6;

// crearArchivo(base).then(
//   success => console.log(success)
//   ).catch(err => console.error(err));

// PROCESS ARGV

// console.log("process.argv", process.argv);

// const [ , ,arg3] = process.argv;
// const [, baseArg] = arg3.split("=");

// console.log("base", baseArg)

// ARGV YARGS

const {  base: baseArg, list, to } = argv;

crearArchivo(baseArg, list, to).then(
  success => console.log(success.green)
  ).catch(err => console.error(err));