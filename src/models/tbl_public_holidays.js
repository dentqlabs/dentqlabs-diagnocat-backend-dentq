const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_public_holidays', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    start_month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    finish_month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    finish_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    year: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "Every year"
    }
  }, {
    sequelize,
    tableName: 'tbl_public_holidays',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
