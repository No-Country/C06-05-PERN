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
        nombre_url: {
            type: DataTypes.STRING,

        },
        color: {
            type: DataTypes.JSON,

        },
        talle: {
            type: DataTypes.JSON,

        },
        categorias_url: {
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
        imagen: {
            type: DataTypes.STRING,
        },
        precio: {
            type: DataTypes.INTEGER,
        }
    });

}