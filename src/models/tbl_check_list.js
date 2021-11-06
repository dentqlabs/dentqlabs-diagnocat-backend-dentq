const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_check_list', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    formats: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    d2d: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    outputs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    d2d_outputs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extras: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    additional_options: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    checked: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    checked_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checked_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    patient_approved: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    radiographers_checklist: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_check_list',
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
