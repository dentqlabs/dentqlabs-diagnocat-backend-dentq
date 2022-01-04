const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api-routes-eav', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    route_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "-> api-routes"
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    datatype_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "-> data-types"
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link_table: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    link_field: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    filter_field: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    link_as_dropdown: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    link_as_value: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    link_as_fieldlist: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'api-routes-eav',
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
