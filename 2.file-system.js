const fs = require('node:fs') // node: is important to read code more clarely

const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // if is a file
  stats.isDirectory(), // If is a directory
  stats.isSymbolicLink(), // If an simbolic anchor
  stats.size // size en bites
)
