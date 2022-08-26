const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('domicilio', {
        id_domicilio: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prov_reg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postal: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}