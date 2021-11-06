const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_heard_about_us_sources', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    other_field_mandatory: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    expenses: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    countries_using: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_heard_about_us_sources',
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
