const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_holded_slots', {
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
    slot_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    session_id: {
      type: DataTypes.CHAR(36),
      allowNull: false
    },
    hold_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_holded_slots',
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
        name: "slot_date_time",
        using: "BTREE",
        fields: [
          { name: "slot_date_time" },
        ]
      },
      {
        name: "session_id",
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "hold_date_time",
        using: "BTREE",
        fields: [
          { name: "hold_date_time" },
        ]
      },
    ]
  });
};
