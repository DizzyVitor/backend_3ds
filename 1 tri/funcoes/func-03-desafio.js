// crie uma função sem parâmetros que imprima "carregando..." pelo menos 200 vezes e invoque essa função uma única vez
// crie uma função que receba 2 parâmetros (nomeAnimal, tiposom) e imprima "o animal +" nomeAnimal+ "emite o som" + tipo som

function carregando(){
    for(let i = 0; i < 200; i++){
        console.log("carregando...")
    }
}
carregando()

function somAnimal(nomeAnimal, TipoSom){
    console.log("O animal " + nomeAnimal + " emite o som " + TipoSom)
}
somAnimal("cachorro", "Latido")
somAnimal("gato", "mia")
somAnimal("porco", "ronco")
somAnimal("pato", "kvá")
somAnimal("cavalo", "rinchar")