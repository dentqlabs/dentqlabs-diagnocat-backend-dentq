const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_expenses', {
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expenses_payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expenses_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    recurring: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    end_day_expense: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    recurring_zero_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    petty_cash: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_expenses',
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
        name: "date",
        using: "BTREE",
        fields: [
          { name: "date" },
        ]
      },
    ]
  });
};
