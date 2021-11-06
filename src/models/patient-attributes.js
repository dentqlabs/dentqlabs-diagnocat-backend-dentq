const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient-attributes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    display_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allow_user_update: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    default_create: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
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
    tableName: 'patient-attributes',
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
