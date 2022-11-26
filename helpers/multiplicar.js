const fs = require('fs');
const colors = require('../colors/colors');

const createFile = async (base = 5, listar = false, hasta = 10) => {

    try {

        if (listar) {

            console.log('=================');
            console.log(colors.debug(`Tabla del ${base}`));
            console.log('=================');

        }
        let consola = '';
        let salida = '';


        for (let i = 1; i <= hasta; i++) {

            let producto = base * i;

            salida += `${base}*${i}=${producto}\n`
            consola += `${base}${colors.warn('*')}${i}=${colors.silly(`${producto}`)}\n`

        }

        if (listar) {
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`

    } catch (error) {
        throw error;
    }
}

/* const createFile = (base = 5) => {
    return new Promise((resolve, reject) => {
        console.log('=================')
        console.log(`Tabla del ${base}`)
        console.log('=================')

        let salida = '';


        for (let i = 1; i <= 10; i++) {

            let producto = base * i;

            salida += `${base}*${i}=${producto}\n`
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);
    })
} */

module.exports = {
    createFile
}