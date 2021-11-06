const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_products',
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
