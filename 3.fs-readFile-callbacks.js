const fs = require('node:fs')

//This is asynchronous but not secuential

console.log("Leyendo el primer archivo...")

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto => ', text)
}) //execute CALLLBACK

console.log('--------------')
console.log('Hacer otra cosa mientras lee el archivo')
console.log('--------------')

console.log("Leyendo el segundo archivo...")
fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => {
    console.log('Segundo texto => ',secondText)
}) 

