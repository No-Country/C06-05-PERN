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


module.exports = sequelize