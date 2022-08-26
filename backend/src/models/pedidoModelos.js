const { DataTypes } = require('sequelize')



module.exports = (sequelize) => {
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


}