const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sms', {
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
    sent_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sent: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    cron_reminder: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    result: {
      type: DataTypes.STRING(512),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_sms',
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
        name: "branch_id",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
    ]
  });
};
