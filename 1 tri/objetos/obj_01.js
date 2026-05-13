// objetos são estruturas do tipo chave-valor
// pode atribuir de forma dinâmica, assim como em arrays 
// objetos tem índices nomeados
// podemos usar for of po for in

const carros = {
    nome: "Camaro",
    modelo: "xpt cam",
    cores:["amarelo","preto"],
    cidades: {}
}
carros.modelo = "Fusca"
carros["nome"] = "Chev" 
console.log(carros.modelo)
console.log(carros.nome)

for(carro in carros){console.log(carro)}
