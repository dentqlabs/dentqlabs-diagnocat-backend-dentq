const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_sales_statuses', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    color_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email_sent_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    unregistered_client_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    disable_reminders: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    call_action: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    meeting_action: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    email_action: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    follow_up_action: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    lunch_learn_action: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_sales_statuses',
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
