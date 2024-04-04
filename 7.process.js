// process es un objeto global que proporciona info y control sobre el proceso actual de ejecucion

//We can controll the entrances arguments, this shows the directory of the elements
//Ex => node 7.process.js kflsadfkjsadf => output: [
//  'C:\\Users\\mora\\AppData\\Roaming\\nvm\\v20.10.0\\node.exe',
//  'C:\\Users\\mora\\Desktop\\CursoNodeJS\\7.process.js',
//  'kflsadfkjsadf'
//] 
//This is really important
console.log(process.argv)


//Controll the process and its out
//process.exit(1)

//process.on('exit', () => {
    //Clean the resources
//})

//current working directory => extract the directory where this line is executed
console.log(process.cwd())


// PEPITO =HOLA node 7.process.js , execute this code in the bash terminal   // platform
console.log(process.env.PEPITO)
