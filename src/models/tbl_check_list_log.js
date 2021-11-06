const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_check_list_log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    check_list_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    changes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    changes_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    changes_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_check_list_log',
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
