const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_uncofirmed_doctors', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    full_name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gdc_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    email_1: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    email_2: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    email_3: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    invoice_email: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    do_not_email_hc: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    password: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    contact_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    scan_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scan_instructions_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    scan_instructions_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    process_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    process_instructions_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    process_instructions_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pay_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pay_instructions_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pay_instructions_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    general_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    general_instructions_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    general_instructions_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hear_from: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    p_name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    p_address_1: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    p_address_2: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    p_address_3: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    p_city: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    p_postcode: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    b_name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    b_address_1: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    b_address_2: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    b_address_3: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    b_city: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    b_postcode: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_exp_date: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_cvv2: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    preferences: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    registered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_visit: {
      type: DataTypes.DATE,
      allowNull: false
    },
    activated: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    colleague_recommended: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    surname: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    forename: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    heard_from_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    heard_other_info: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobile_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    speciality: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    other_speciality: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    encrypted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    want_receive_our_info: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    council_reg_number: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_uncofirmed_doctors',
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
