const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api-staff', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    full_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    access_level: {
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
    tableName: 'api-staff',
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
