require('dotenv').config()
const server = require('./src/app.js');
const cors = require('cors')
const express = require('express')
require('./src/database')



const { conn } = require('./src/database.js');
const PORT = 3001
const app = express()
const userRouter = require('./src/routes/userRoute')
app.use(cors())
app.use(express.json())

app.use('/api', userRouter)


// Syncing all the models at once.
conn.sync({ /* force: true */ }).then(async () => {
  console.log("modelos sincronizados");
  server.get('/', async (request, response) => {
    return response.status(200).send({ message: `Welcome` })
  })
  try {
    server.listen(PORT, () => {
      console.log('servidor conectado ' + PORT); // eslint-disable-line no-console
    });
  } catch (error) {
    server.listen(PORT, () => {
      console.log('Imposible conectarse ' + error)
    });
  }


});