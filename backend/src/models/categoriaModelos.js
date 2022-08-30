const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {
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


}