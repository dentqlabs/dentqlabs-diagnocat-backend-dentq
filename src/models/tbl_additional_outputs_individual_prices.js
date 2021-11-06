const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_additional_outputs_individual_prices', {
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
    name: {
      type: DataTypes.STRING(255),
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
    sectional: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_additional_outputs_individual_prices',
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