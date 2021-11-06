const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sales_diary', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_finish_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_sales_diary',
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
