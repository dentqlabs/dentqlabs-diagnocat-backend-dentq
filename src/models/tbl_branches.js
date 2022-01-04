const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_branches', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    areas: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    use_in_scans_report: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    disallow_online: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timezone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    undeletable: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_branches',
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
