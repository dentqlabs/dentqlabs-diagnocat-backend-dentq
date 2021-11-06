const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_events', {
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
    event_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    event_finish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    event_title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_event: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_file: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_events',
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
