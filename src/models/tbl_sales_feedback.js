const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sales_feedback', {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    questions: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    feedback_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    feedback_received: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_sales_feedback',
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
