const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cookie_login: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    api_login: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    address3: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    postcode: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    locale: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    validated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    view_api_docs: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'users',
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
