const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ip-visitors', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip_address: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(25,20),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(25,20),
      allowNull: true
    },
    country_code: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
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
    tableName: 'ip-visitors',
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
