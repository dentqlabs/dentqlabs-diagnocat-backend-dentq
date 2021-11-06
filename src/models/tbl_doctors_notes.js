const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_doctors_notes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_doctors_notes',
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
        name: "doctor_id",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });
};
