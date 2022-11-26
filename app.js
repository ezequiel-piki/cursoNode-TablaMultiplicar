

const { createFile } = require('./helpers/multiplicar.js')
const colors = require('./colors/colors');
const argv = require('./yargs/yargs');

//const base = 3;

console.clear();



/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

 */


createFile(argv.b, argv.l, argv.h)
    .then(nameFile => console.log(colors.info(nameFile, 'created')))
    .catch(err => console.log(err))
