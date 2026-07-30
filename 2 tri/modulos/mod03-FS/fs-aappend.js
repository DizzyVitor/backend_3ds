
const fs = require('node:fs')
const path = require('node:path')

const frasePreferida = `A volta dos que não foram!\n`
const log = `Atenção você está offiLine...\n`

try {
    const arquivo = path.resolve(__dirname, 'frase.md')
    fs.appendFileSync(arquivo, frasePreferida, 'utf-8')

    // reescrever totalmente o contúdo
    fs.appendFileSync(arquivo, log, 'utf-8')
    fs.appendFileSync(arquivo, log, 'utf-8')
} catch (error) {
console.log(error.message)
}