require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, PORT, DB_NAME
} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}?ssl=no-verify`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

try {
  sequelize.authenticate();
  console.log('Conexion exitosa a la base de datos');
} catch (error) {
  console.error('no es posible conectarse a la base de datos:', error);
}
const basename = path.basename(__filename);


const modelDefiners = [];



// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
/* let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]); */
sequelize.models = Object.fromEntries(entries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
for (pi in sequelize.models) {
  console.log(sequelize.models[pi]);
}
const { usuarios, domicilio, pedidos, compras, categorias, productos } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);



usuarios.hasMany(domicilio, {
  foreignKey: "id_usuario",
  sourceKey: "id"
})


domicilio.belongsTo(usuarios, {
  foreignKey: "id_usuario",
  targetId: "id"
})

usuarios.hasMany(pedidos, {
  foreignKey: "id_usuario",
  sourceKey: "id"
})

pedidos.belongsTo(usuarios, {
  foreignKey: "id_usuario",
  targetId: "id"
})

usuarios.hasMany(compras, {
  foreignKey: "id_usuario",
  sourceKey: "id"
})

compras.belongsTo(usuarios, {
  foreignKey: "id_usuario",
  targetId: "id"
})

pedidos.hasOne(compras, {
  foreignKey: "id_pedido",
  sourceKey: "id_pedido"
})

compras.belongsTo(pedidos, {
  foreignKey: "id_pedido",
  sourceKey: "id_pedido"
})

categorias.hasMany(productos, {
  foreignKey: "id_categoria",
  sourceKey: "id_categoria"
})

productos.belongsTo(categorias, {
  foreignKey: "id_categoria",
  targetKey: "id_categoria"
})

productos.hasMany(pedidos, {
  foreignKey: "id_productos",
  sourceKey: "id_productos"
})

pedidos.hasMany(productos, {
  foreignKey: "id_productos",
  targetKey: "id_productos"
})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};

