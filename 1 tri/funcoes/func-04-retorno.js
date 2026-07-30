// Funções de retorno exigem a
// clásula/termo 'return'
// isso permite fazer operações
// sequenciais com o resultado
// armazenar funções em variáveis 

function sobraDoSalario(meuSalario){
    const contaDeLuz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeLuz+aluguel)
    return`O que restou no fim do mês ${resto.toFixed(2).replace('-', ',')}`
}
 const MinhasSobras = sobraDoSalario(1700.0)
 // teste - experimento
 console.log(sobraDoSalario(50000))
