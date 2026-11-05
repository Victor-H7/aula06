//var, let e const
//var = variaveis globais



//let = usar somente para uma parte do código, uma variavel dentro de uma função, dentro de um escopo, dentro de um if, de um for
//let = variaveis temporarias



//const = variaveis que não podem ser alteradas, onde mudo somente em um lugar e muda no sistema todo, SOMENTE EU posso mudar;
//a constante não pode ser mudada no meio do projeto, somente no inicio dela




//OPERADORES LOGICOS = e; simbolos e = && OU and;

//OPERADORES LOGICOS = ou; ou = || OU or

//OPERADORES LOGICOS = not/!



//e (&&) = resulta em um valor VERDADEIRO se os dois valores de entrada da operação forem VERDADEIRO, caso contrário o resultado é FALSO, no
//caso se um dos valores for FALSO

//exemplo = usado para um site, por exemplo de email e senha, os dois sendo corretos, o codigo roda, se n, não roda, se for usar o OR,
//se só uma das informações forem corretas o app entra
//se as duas variaveis forem corretas ele valida, se uma das variaveis forem incorretas, ele não valida


//ou (||) = resulta em um valor VERDADEIRO se ao menos UMA das condições ou valores de entrada da operação for VERDADEIRO,
//caso, as duas condições forem FALSAS, o resultado é FALSO

//exemplo = você ganha desconto se for estudante ou se tiver cupom, se tiver cupom e n for aluno, ganha, e vice-versa, ja no AND, você 
//precisaria ser aluno e ter o cupom de desconto para o código continuar rodando



//not (!) = ele inverta a operação, se o var (variação) for verdadeiro, ele inverte para falso, e se for falso, ele inverte para verdadeiro

//exemplo = se a luz está acesa e eu negar q ela está acesa, ela vai apagar, se a luz está apagada e eu negar que ela está apagada, ela vai acender,
//ou seja, ele inverte o valor da operação




veiculo2 = "navio"
veiculo1 = "carro"


//uma das condições precisam ser verdadeira para o código continuar rodando, se as duas forem falsas, o código não roda
if (veiculo1 == "carro" || veiculo2 == "moto") {
    console.log ("pode viajar")
}else {
    console.log ("não pode viajar")
}






// for (var i = 0; i <= 10; i++) {
//     console.log (i)
// }

// for (let i = 0; i <= 20; i++){
//     console.log ("")
// }



// if (1 == 1) {
//     let numero = 87
//     console.log (numero * 10)
// }

// console.log (numero) // vai dar erro, pois a variavel numero só existe dentro do if




// const NOME_COMPLETO = "Victor Hugo"