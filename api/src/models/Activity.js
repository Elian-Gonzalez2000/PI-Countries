const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
     ID: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      len: [5, 10]
    },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },difficulty:{
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: { min: 1, max: 5 },
    },duration:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },season:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};