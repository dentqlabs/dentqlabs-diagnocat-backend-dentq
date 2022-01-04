const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api-routes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    header_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "-> api-headers"
    },
    local_url: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    json_return: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    php_usage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    python_usage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    java_usage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    javascript_usage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    media_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "\/media video"
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
    tableName: 'api-routes',
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
