const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('practices', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    trading_as: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    address_2: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    address_3: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'practices',
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
