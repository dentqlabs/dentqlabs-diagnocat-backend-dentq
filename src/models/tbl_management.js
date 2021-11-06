const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_management', {
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
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    done: {
      type: DataTypes.DATE,
      allowNull: false
    },
    done_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    archived: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    urgent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    processing_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    upload_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    related_message_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    display_message_branch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    files: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_management',
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
