const { readFile } = require('node:fs/promises');

// This is asynchronous but secuential
 
(
	async () => {
        console.log("Leyendo el primer archivo...")

        const text = await readFile('./archivo.txt', 'utf-8')
            
        console.log('primer texto => ', text)
          
        
        console.log('--------------')
        console.log('Hacer otra cosa mientras lee el archivo')
        console.log('--------------')
        
        console.log("Leyendo el segundo archivo...")
        
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        
        console.log('Segundo texto => ',secondText)
	}
)()


 

