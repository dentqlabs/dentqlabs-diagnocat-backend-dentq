const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_phone_cases', {
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
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    case_opened: {
      type: DataTypes.DATE,
      allowNull: false
    },
    case_opened_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    was_done: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cannot_be_done: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    done_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feedback_received: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_phone_cases',
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
        name: "(case_op_by)",
        using: "BTREE",
        fields: [
          { name: "case_opened_by" },
        ]
      },
    ]
  });
};
