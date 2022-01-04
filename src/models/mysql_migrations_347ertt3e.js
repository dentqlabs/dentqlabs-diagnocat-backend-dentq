const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mysql_migrations_347ertt3e', {
    timestamp: {
      type: DataTypes.STRING(254),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'mysql_migrations_347ertt3e',
    timestamps: false,
    indexes: [
      {
        name: "timestamp",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "timestamp" },
        ]
      },
    ]
  });
};
