const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_offers', {
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
    offer_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offer_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offer_price_discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    offer_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    offer_start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    offer_end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    first_scan_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    apply_on_booking: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_offers',
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
