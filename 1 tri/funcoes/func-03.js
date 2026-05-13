//Crie uma função sem parâmetros que imprima "Carregando..." 
// pelo menos 200 vezes e invoque esta função uma única vez
// - W3SCHOOL
// - MDN
//Crie uma funsão que receba 2 parâmetros (nomeAnimal, tipo som) e imprima 
// "o animal + nome animal emite o som + tipo som"
//SomDoAnimal("cavalo,""Relincha")
 
function Carregando(){
    for(let i = 0; i <200; i++){
console.log("carregando...")
    }
}
Carregando()

function SomAnimal (nomeAnimal, Tiposom){
    console.log("O animal " + nomeAnimal + "emite o som" + Tiposom)
}
somAnimal("cachorro", "Latido")
somAnimal("gato", "miado")
somAnimal("vaca", "mugido")
somAnimal("leão", "rugido")
somAnimal("pássaro", "canto")
somAnimal("cavalo", "relincho")
somAnimal("jacu", "grito")