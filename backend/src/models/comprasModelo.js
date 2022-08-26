const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {
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

}