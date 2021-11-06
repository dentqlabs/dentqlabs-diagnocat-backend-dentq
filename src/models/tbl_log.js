const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    log_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    made_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    detailed_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sales_db_action: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_log',
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
        name: "(made_by)",
        using: "BTREE",
        fields: [
          { name: "made_by" },
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
