const server = require('./src/app.js');



const { conn } = require('./src/database.js');
const PORT = 3001
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  server.get('/', async (request, response) => {
    return response.status(200).send({ message: `Welcome` })
  })

  server.listen(PORT, () => {
    console.log('servidor conectado ' + PORT); // eslint-disable-line no-console
  });

});