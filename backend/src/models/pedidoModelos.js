const { DataTypes } = require('sequelize')
const sequelize = require("../database")
const compras = require("./comprasModelo")

const pedidos =
    sequelize.define('pedidos', {
        id_pedido: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        unidades_totales: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio_total: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

pedidos.


    module.exports = pedidos