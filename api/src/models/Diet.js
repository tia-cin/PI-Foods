const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('diet', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}