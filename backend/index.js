const app = require("./app")
const cors = require("cors");
require("./basededatos")


const { sequelize } = require("./basededatos")




const path = require('path');

const PORT = 4000


app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

const pers = require("./Model/personas")




pers.sync({ alter: true }).then(async () => {
  console.log("modelos sincronizados");
  app.get('/', async (request, response) => {
    return response.status(200).send({ message: `Welcome` })
  })
  try {
    app.listen(PORT, () => {
      console.log('servidor conectado ' + PORT); // eslint-disable-line no-console
    });
  } catch (error) {
    app.listen(PORT, () => {
      console.log('Imposible conectarse ' + error)
    });
  }


});