function chamada(function1,valorA,valorB){
	return function(function2,valorC,valorD){
		return function(mensagem){
			return function1(valorA,valorB).then(
				resposta1=> function2(valorC,valorC).then(
				resposta2=>  `${resposta1} ${resposta2} ${mensagem}`))
		}
	}
}

const multiplicar = (valorA,valorB)=> new Promise(resolve=>resolve(valorA * valorB))
const somar = function(valorC,valorD){return new Promise(resolva=>resolva(valorC + valorD))}
chamada(somar,2,2)(multiplicar,2,1)("resolvido").then(console.log)
