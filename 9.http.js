const http = require('node:http')
const { findAvaiblePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => { // This is a callback
  console.log('request recived') // This only will print on our terminal proyect
  res.end('Hola mundo')
})

findAvaiblePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
