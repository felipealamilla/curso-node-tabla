const { createFileAsync } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

require('colors');


console.clear();
// console.log(argv);

// console.log('base: yargs', argv.base);

// console.log(process.argv);
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log( base );

// Call function
// const base = 1;

createFileAsync( argv.b, argv.l, argv.h )
    .then( fileName => console.log(fileName.green, 'creado') )
    .catch( err => console.log(err) );

