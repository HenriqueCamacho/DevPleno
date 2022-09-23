// c-like
//Multiparadigma

const valor = 10 //Não podemos atribuir outro valor, mas podemos com obj e arr..., gera menos bugs
let valor2 = 20

//var causa hoisting, nunca usar

if (valor === 10 && valor2 === 20) {// === checa valor e tipo, == pode tentar converter o tipo
    console.log("It's 10 nigga")
}
else {
    console.log("Not 10 hommie")
}

const objeto = { time1: "Barcelona", time2: "Real Madrid" }
objeto["time3"] = "Valencia"
console.log(objeto)

//Funções são First Class citiziens
const soma = function (a, b) {
    return a + b
}

console.log(soma(2, 2))

const subtracao = function (a, b) {
    return a - b
}

const calculadora = function (op, a, b) {
    return op(a, b)
}

console.log(calculadora(soma, 1, 1.5))
console.log(calculadora(subtracao, 1, 1.5))

//f(g(x)) -- Composição de funções inspirada na matemática

const vetor = [1, 2, 3, 4, 5, 6]

//MAP
//Retorna um vetor, não da para mudar vetor original, usa a função callback
const vet2 = vetor.map(function (item) {
    return [item, item ** 2, item ** 3]
})
console.log(vet2)

//FILTER 
const pares = vetor.filter(function (item) {
    return item % 2 == 0
}).map(function (item) {
    return item ** 3 //chaining
})
console.log(pares)
const pares2 = vetor.filter(item => item % 2 == 0).map(item => item ** 3)//Arrow Functions
console.log(pares2)

const somentePares = num => num % 2 == 0
const potencia3 = num => num ** 3
const pares3 = vetor.filter(somentePares).map(potencia3)
console.log(pares3)

//REDUCE
const somar = (acumulado, curr) => acumulado + curr
const somatorio = pares3.reduce(somar, 2) //Valor inicial
console.log("Result do Reduce = ", somatorio)

//FOREACH

