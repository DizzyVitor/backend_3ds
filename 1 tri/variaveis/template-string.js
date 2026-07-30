// Templete (modelo) string ou templete literals
// São texto que processam informações
// de natureza distinta numa mesma sentença
// Ex. `Minha mãe é $[nomeDaMae]`
//Observe a estrutura padronizada com `${}`

const nome = 'Pedro'
const sobrenome = 'Marley'
const perfil = `Olá, ${nome} ${sobrenome}`
console.log(perfil)