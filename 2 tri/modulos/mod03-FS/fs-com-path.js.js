// importar PATH e FS
// Path possui (join para juntar caminhos e Resolve
// para deduzir subdiretório e S.O.)
const { error } = require('console')
const fs = require('fs')
const path = require('path')

// salvar o Caminho em um variável
// const caminho = path.join(__dirname, 'README.md')//Markdown, text,
try{
const caminho = path.resolve(__dirname, 'READM.md' )// Abrir, ler, deletar, editar
const arquivo = fs.readFileSync(caminho, 'utf-8')

console.log(arquivo)
}catch(erro) {
    console.warn("Atenção!" +erro.path)
    throw new Error('Mensagem de erro personalizada');

    console.log('-------------------------------')
}
