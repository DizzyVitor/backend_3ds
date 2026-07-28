const http = require('node:http')
const porta = 8081

const server = http.createServer((req, res)=>{   
res.statusCode = '204'
res.setHeader('Content-Type', 'text/html',/
res.end('Página Inicial')
})
server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`)
    http://localhost:${porta}`)
})  