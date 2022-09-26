// 0) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
const soma = (prev, curr) => prev + curr
vetor = [1, 1, 1, 4, 5, 6, 6, 7, 8, 9, 10]
console.log(vetor.reduce(soma))

// 1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
const pares = valor => valor % 2 == 0
const pares_soma = vetor.filter(pares).reduce(soma)
console.log("Pares somados --> ", pares_soma)

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
const impares = valor => valor % 2 != 0
const impares_soma = vetor.filter(impares).reduce(soma)
console.log("Impares somados --> ", impares_soma)

//3) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente no vetor 
//- Dica: utilize reduce
const igual = (agg, curr) => {
    if (!agg[curr]) {//Não existe
        agg[curr] = 0
    }
    agg[curr] += 1
    return agg
}
const valor_vezes = vetor.reduce(igual, {})
console.log(valor_vezes)


//4) 2 Forma - Pior pois acessou algo que estava fora do escopo
const valor_vezes2 = {}
const igual2 = (item) => {
    if (!valor_vezes2[item]) {
        valor_vezes2[item] = 0
    }
    valor_vezes2[item] += 1
}
vetor.forEach(igual2)
console.log("2 Forma --> ", valor_vezes2)


//5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor - aqueles que ocorrem apenas 1 vez dentro do vetor.
//- Dica 1: utilize reduce, filter e keys
//- Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício
const unico = (agg, curr) => {
    if (!agg[curr]) {
        agg[curr] = 1
    }
    return agg
}
const nums = Object.keys(vetor.reduce(unico, {}))//Retorna vetor formado pelas chaves
console.log(nums)


// 6) Dado um vetor com números, retorne somente os números pares;
console.log("Números Pares --> ", vetor.filter(pares))

// 7) Dado um vetor com números, retorne somente os números pares;
console.log("Números Impares --> ", vetor.filter(impares))

// 8) Uma função é chamada da seguinte forma:
//calculadora(10, '+', 20)
//Crie o corpo da função de forma que ela realize as 4 operações aritméticas
const calculadora = function (a, op, b) {
    if (op === "+") {
        return a + b
    }
    else if (op === "-") {
        return a - b
    }
    else if (op === "*") {
        return a * b
    }
    else if (op === "/") {
        if (b === 0) {
            return -1
        }
        else {
            return a / b
        }
    }
    return -1
}

a = 6
b = 3
console.log("Soma = ", calculadora(a, "+", b))
console.log("Subtração = ", calculadora(a, "-", b))
console.log("Multiplicação = ", calculadora(a, "*", b))
console.log("Divisão = ", calculadora(a, "/", b))
console.log("Divisão por 0 = ", calculadora(a, "/", 0))
console.log("Operação não implementada = ", calculadora(a, "x", b))


/*9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. 
Exemplo:
const soma = (num1, num2) => num1+num2
const calculadoraFn = (....) => ….
calculadoraFn(10, soma, 20)*/
const sum = (a, b) => a+b
const sub = (a, b) => a-b
const mult = (a, b) => a*b
const div = (a, b) => a/b

const calc = (a, op, b) => {
    const supported_ops = [sum, sub, mult, div]
    
    if (op === div && b === 0) {
        return -2
    }
    if(!supported_ops.includes(op) ){
        return -1
    }

    return op(a, b)
}
console.log("2 Calculadora")
console.log("Soma = ", calc(a, sum, b))
console.log("Subtração = ", calc(a, sub, b))
console.log("Multiplicação = ", calc(a, mult, b))
console.log("Divisão = ", calc(a, div, b))
console.log("Divisão por 0 = ", calc(a, div, 0))
console.log("Operação não implementada = ", calc(a, 'fds', b))