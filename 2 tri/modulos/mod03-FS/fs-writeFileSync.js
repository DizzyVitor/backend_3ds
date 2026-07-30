
const fs = require('node:fs')
const path = require('node:path')
const frasePreferida = `A volta dos que não foram!`
const log = `Atenção você está offiLine...`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.writeFileSync(arquivo, frasePreferida, 'utf-8')

    // reescrever totalmente o contúdo
    fs.writeFileSync(arquivo, log, 'utf-8')
} catch (error) {
console.log(error.message)
}