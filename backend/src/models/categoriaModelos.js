const { DataTypes } = require('sequelize')
const sequelize = require("../database")
const productos = require("./productosModelo")

const categorias =
    sequelize.define('categorias', {
        id_categoria: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_categoria: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });




categorias.hasMany(productos, {
    foreignKey: "id_categoria",
    sourceKey: "id_categoria"
})

productos.belongsTo(categorias, {
    foreignKey: "id_categoria",
    targetId: "id_categoria"
})

module.exports = categorias