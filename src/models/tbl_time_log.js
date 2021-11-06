const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_time_log', {
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
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    auto_message: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_time_log',
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
        name: "(ap_id)",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
      {
        name: "(user_id)",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
