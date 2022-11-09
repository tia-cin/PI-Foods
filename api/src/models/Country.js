const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("country", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    official: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    independent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    map: {
      type: DataTypes.STRING,
    },
    timezone: {
      type: DataTypes.STRING,
    },
    unMember: {
      type: DataTypes.BOOLEAN,
    },
    landlocked: {
      type: DataTypes.BOOLEAN,
    },
  });
};
