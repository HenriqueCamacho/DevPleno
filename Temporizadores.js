//Monothread

console.log(1)

//Assincronismo, agenda, pode atrasar por conta de outros fatores
setTimeout(() => {
    console.log('Ola em 3 segundos')
}, 0) //Milisegundos

console.log(2)


//Processo muito pesado
//Settimeout só é executado depois

//Operações pesadas geralmente colocamos no assincronismo e não na linha principal, a menos que seja necessário(arquivo de configuração que executa apenas 1 vez por exemplo)


//Executa a cada x segundos
console.log(3)
let count = 0
let interval = setInterval(() => {
    console.log("Ola")
    count++
    if (count>4){
       clearInterval(interval) 
    }
}, 1000)
console.log(4)

//Callback, função chamada novamente

let interval2 = setInterval(() => {
    console.log("Ola2")
    count++
    if (count>15){
       clearInterval(interval2) 
    }
}, 1000)
