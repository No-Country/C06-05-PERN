const { DataTypes } = require('sequelize')
const sequelize = require("../database")
const pedidos = require("./pedidoModelos")

const productos =
    sequelize.define('productos', {
        id_productos: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_prod: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comentarios_prod: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,

        },
        precio: {
            type: DataTypes.INTEGER,

        }
    });



productos.hasMany(pedidos, {
    foreignKey: "id_producto",
    sourceKey: "id_producto"
})

pedidos.belongsTo(productos, {
    foreignKey: "id_producto",
    targetId: "id_producto"
})


module.exports = productos