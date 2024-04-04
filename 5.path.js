const path = require('node:path');

// folder separator bar per OS
console.log(path.sep)


// Joint rutes with paths
const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath)

const base = path.basename('tpm/mora-secret/password.txt')
console.log(base)

// This remove the file extension
const fileName = path.basename('tpm/mora-secret/password.txt', '.txt')
console.log(fileName)

// This is really usefull, this extract the file extension 
const extension = path.extname('name.rar')
console.log(extension)