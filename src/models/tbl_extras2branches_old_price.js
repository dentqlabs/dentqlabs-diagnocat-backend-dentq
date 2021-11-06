const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_extras2branches_old_price', {
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
    use_in_scans_report: {
      type: DataTypes.TINYINT,
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
    d2d_regular: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d_discount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d_vss: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d_p5p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d_p10p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d_p15p: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    d2d_hk_offer_code: {
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
    require_comments: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    require_upload: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    additional_option_to_check: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_radiologistic_report: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    full_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    related_outputs: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    css: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_radiographic_template: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_surgical_guide: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    additional_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    is_bone_measurement_report: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    use_in_2d: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_extras2branches_old_price',
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
