const fs = require('fs')

fs.createReadStream('./assets/tractor.jpeg')
    .pipe(fs.createWriteStream('./assets/tractor-stream.jpeg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
