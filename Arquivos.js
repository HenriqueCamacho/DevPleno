const {readFile, escreverArq} = require("./fs-promise") 

//Callback dentro de callback

//Callback hell, código cresce para baixo, callback dentro de callback
//Dificil de debugar e depurar
/*fs.readFile('Temporizadores.js', (err, data)=> {
    fs.writeFile('temporizador-copy.js', data, (err) =>{
        console.log('Arquivo copiado')
    })
})*/

//Para resolver isso, usar promises + async/await, código continua o mesmo porém fica mais legível

//console.log(1)
/*const readFile = path => new Promise((resolve, reject) => {//Callback nela tbm
    fs.readFile(path, (err,data) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})*/

//Promise chaining
/*
readFile('Temporizadores.js')
    .then( data => writeFile('copia-promise.js', data))
    .then( () => console.log('Arquivo Copiado') )
    .catch(err => console.log(err))

console.log(2)*/


//Menos complicado
//async/await retorna promise
//syntatic sugar
console.log(1)
const copyFile = async() => {
    console.log('Ola async/await')
    try{
        const data = await readFile('Temporizadores.js') //Esperou
        await escreverArq('copy-async-await.js', data)
        console.log('Arquivo lido')
    }catch(err){
        console.log('erro', err)
    }
}

copyFile().then( ()=> { console.log('Fim do async/await')} )
console.log(2)