const { DataTypes } = require('sequelize')
const sequelize = require("../database")

const compras =
    sequelize.define('compras', {
        id_compras: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });



module.exports = compras