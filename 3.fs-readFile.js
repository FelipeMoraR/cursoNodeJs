const fs = require('node:fs')


console.log("Leyendo el primer archivo...")

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
}) //execute callback

console.log('--------------')
console.log('Hacer otra cosa mientras lee el archivo')
console.log('--------------')

console.log("Leyendo el segundo archivo...")
fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => {
    console.log(secondText)
}) 

