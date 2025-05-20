const express = require('express')
const app = express()
const port = 3999
const userRoutes = require('./routes/user.routes.js')

app.use('/', userRoutes)

// Levantar el servidor
app.listen(port, function () {
  console.log(`Servidor levantado en el puerto ${port}`)
})
