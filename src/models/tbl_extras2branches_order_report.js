const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_extras2branches_order_report', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    one_jaw: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_extras2branches_order_report',
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