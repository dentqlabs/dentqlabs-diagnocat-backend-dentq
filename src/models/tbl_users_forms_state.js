const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_users_forms_state', {
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
    form: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    fields: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updated: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cleared: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_users_forms_state',
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
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
