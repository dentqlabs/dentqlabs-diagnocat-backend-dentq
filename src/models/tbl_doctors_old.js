const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_doctors_old', {
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
    invoice_email2: {
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
    cc_autopayment: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    cc_issue_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_address_1: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_address_2: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_address_3: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_address_4: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_city: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_state: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_postcode: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cc_country: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cc_copy_billing: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    cc_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    cc_last_transaction_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    preferences: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    disabled_path_report: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    registered_sales_db: {
      type: DataTypes.DATE,
      allowNull: false
    },
    registration_email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    registration_email_sent_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    registration_email_sent_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stopped_ordering_email_sent_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    api_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    credit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    allow_online: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    donot_email_feedback: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    skip_name: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    colleague_recommended: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    manually_created: {
      type: DataTypes.TINYINT,
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
    do_not_ask_cc_details: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    p_coords: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allow_pacs_format: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    added_by_staff: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    patient_pay_only: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    patient_pay_only_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    block_activity: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    additional_invoices_email: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    allow_multi_branch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    allow_purchase_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    default_purchase_order: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    disabled: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    charge: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    disallow_invoicing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    remind_cc_later: {
      type: DataTypes.BOOLEAN,
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
    radiology_report: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    why_left_empty: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    threeshape_username: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    threeshape_password: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    invisalign_username: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    invisalign_password: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    six_digit_training_code: {
      type: DataTypes.BLOB,
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
    },
    not_include_surcharge: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    no_direct_scan_in_email: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    paperless_invoice: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    allowed_offer_code: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_doctors_old',
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
