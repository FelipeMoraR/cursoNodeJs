const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  let stats

  try {
    files = await fs.readdir(folder) // This is an object
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`))
    process.exit(1) // This print an icon of error in terminal
  }

  // filesPrimses is a map funciton so is an array.
  const filesPromises = files.map(async file => { // MAP is a callback and if you use async/await map will execute simultaneously others files, like paralel but the code is secuential.
    const filePath = path.join(folder, file) // 2 will enter, one of them will finish earlier than other and that file will pass to the next line of code while the other still loading, this is nos parallelism, only allows a lot of simultaneous inputs.

    try {
      stats = await fs.stat(filePath) // Status and file information and fs.stat(filePath) is a promise
    } catch {
      console.error(`No se pudo leer el archivo ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'D' : 'F'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString() // format the mtime to local date

    return `${pc.bold(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  const fileInfo = await Promise.all(filesPromises) // This wait all promises have to be done

  fileInfo.forEach(fileInfo => console.log(fileInfo)) // Travel the array
}

ls(folder)
