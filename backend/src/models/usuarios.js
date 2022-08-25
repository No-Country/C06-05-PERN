const { DataTypes } = require('sequelize');
const sequelize = require("../database")
const usu_domicilio = require("./domicModelos")
const pedidos = require("./pedidoModelos")
const compras = require("./comprasModelo")

const usuarios =
  sequelize.define('usuarios', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contra: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

usuarios.hasMany(usu_domicilio, {
  foreignKey: "id_usuario",
  sourceKey: "id"
})

usu_domicilio.belongsTo(usuarios, {
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



module.exports = usuarios