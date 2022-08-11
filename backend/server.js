const express = require('express');
const { Sequelize } = require('sequelize');
const PORT = 4000



/* 
const bodyParser = require('bodyParser'); */
const bodyParser = require('body-parser');
const app = express()
require('./database')
/* app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(PORT, () => console.log("Servidor listo en puerto" + PORT))
 */


app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.get('/', async (request, response) => {
    return response.status(200).send({ message: `Welcome` })
})

try {
    app.listen(PORT, () => {
        console.log(`Servidor listo en puerto http://localhost:${PORT}`)
    })
} catch (error) {
    console.log(`Error occurred: ${error.message}`)
}
