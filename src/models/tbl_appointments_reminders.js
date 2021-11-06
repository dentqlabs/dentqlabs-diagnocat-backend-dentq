const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_appointments_reminders', {
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
    remind_on: {
      type: DataTypes.DATE,
      allowNull: false
    },
    email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_appointments_reminders',
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
        name: "appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
    ]
  });
};
