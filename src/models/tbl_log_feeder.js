const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_log_feeder', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    log_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    forced_refreshing: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    delivered: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    forced_refreshing_branch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    log_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_log_feeder',
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
      {
        name: "(user_id)",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "log_id",
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
