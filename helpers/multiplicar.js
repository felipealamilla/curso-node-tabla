const fs = require('fs');
require('colors');

const createFileAsync = async( base = 5, showList = false, limit = 10 ) => {

    try {
        let output  = '';
        let consola = '';

        for (let i = 1; i <= limit; i++) {
            output += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if (showList) {
            console.log( '=========================='.yellow);
            console.log( `     Tabla del: ${ base }`.bold);
            console.log( '=========================='.yellow);

            console.log( consola.blue );
        }

        const fileName = `tabla-${ base }.txt`;
        fs.writeFileSync( './output/' + fileName, output);
        return fileName;

    } catch (err) {
        throw err
    }
    
}

module.exports = {
    createFileAsync
}