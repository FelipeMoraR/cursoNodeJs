const fs = require('node:fs/promises')


console.log("Leyendo el primer archivo...")

fs.readFile('./archivo.txt', 'utf-8')
    .then (text => {
        console.log('primer texto => ', text)
    }) //execute promise

console.log('--------------')
console.log('Hacer otra cosa mientras lee el archivo')
console.log('--------------')

console.log("Leyendo el segundo archivo...")

fs.readFile('./archivo2.txt', 'utf-8')
    .then (secondText => {
    console.log('Segundo texto => ',secondText)
    }) 

