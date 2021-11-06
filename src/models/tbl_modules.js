const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_modules', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    primary_navigation_item_section: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    primary_navigation_item_action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    secondary_navigation_items: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sections: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    undeletable: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_modules',
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
