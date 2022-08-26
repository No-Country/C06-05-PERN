const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
  sequelize.define('usuarios', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contra: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}