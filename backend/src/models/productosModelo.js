const { DataTypes } = require('sequelize')



module.exports = (sequelize) => {
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

}