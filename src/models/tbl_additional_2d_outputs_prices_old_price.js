const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_additional_2d_outputs_prices_old_price', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    one_jaw_regular: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    one_jaw_discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    one_jaw_vss: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    one_jaw_p5p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    one_jaw_p10p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    one_jaw_p15p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    one_jaw_hk_offer_code: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_regular: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_vss: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_p5p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_p10p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_p15p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    two_jaws_hk_offer_code: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_regular: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_vss: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_p5p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_p10p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_p15p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    quadrant_hk_offer_code: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_regular: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_vss: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_p5p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_p10p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_p15p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    ortho_hk_offer_code: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_regular: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_vss: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_p5p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_p10p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_p15p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sectional_hk_offer_code: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    full_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_additional_2d_outputs_prices_old_price',
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
