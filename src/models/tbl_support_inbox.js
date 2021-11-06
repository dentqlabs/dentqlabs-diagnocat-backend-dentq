const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_support_inbox', {
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
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    support_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    support_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_support_inbox',
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
    ]
  });
};
