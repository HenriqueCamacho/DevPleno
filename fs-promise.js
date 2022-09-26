const fs = require("fs") //Faz parte do core do Node, é o import do Python, fs--> filesystem

//Para resolver isso, usar promises + async/await, código continua o mesmo porém fica mais legível
const readFile = path => new Promise((resolve, reject) => {//Callback nela tbm
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
})

module.exports = {
    readFile: readFile, escreverArq: writeFile //Posso exportar apenas o que desejar, função, obj, valor
}