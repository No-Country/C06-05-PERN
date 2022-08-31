
const passport = require("passport");
const app = require("./src/app")
require("./src/database")


const sequelize = require("./src/database")




const path = require('path');

const PORT = 4000



app.use(passport.initialize());
app.get('/', function (req, res) {
  res.send('Hello World')
})

const { conn } = require("./src/database")

/* const usu = require("./src/models/usuarios")
const com = require("./src/models/categoriaModelos")
const pl = require("./src/models/comprasModelo")
const pla = require("./src/models/domicModelos")
const loop = require("./src/models/pedidoModelos")
const loop2 = require("./src/models/productosModelo")
const gropu = [usu, com, pl, pla, loop, loop2] */

conn.sync({ /* froce: true  */ }).then(async () => {
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
console.log("listo");
