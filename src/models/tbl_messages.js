const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_messages', {
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
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    done: {
      type: DataTypes.DATE,
      allowNull: true
    },
    done_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    archived: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    urgent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    processing_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upload_status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    related_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    display_message_branch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    auto_message: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_messages',
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
    ]
  });
};
