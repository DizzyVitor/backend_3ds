// crie um perfil de profissional que
// interpole uma frase é um objeto com
// as caracteristicas de um profissional a sua escolha

// criar objeto profissional

// criar variavel com interpolção (template)

//imprimir PerfilProfissional

const profissional = {
    nome: "Clebersonn Júnior",
    profissão: "Engenharia Automotiva",
    experiência: "30 Anos",
    especialização: "Mecânica",
    cidade: "Brasilia",

}

const perfilProfissional = `\nOlá, meu nome é ${profissional.nome}. \nSou  experiente na ${profissional.profissão} \ncom ${profissional.experiência} \nde experiência, especializada em ${profissional.especialização}, \ne atuo na cidade de ${profissional.cidade}.`

console.log(perfilProfissional)