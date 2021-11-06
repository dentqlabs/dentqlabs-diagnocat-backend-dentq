const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_appointments_statuses', {
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    color_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    text_color: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    in_default_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    default_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    check_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    in_waiting_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    default_in_waiting_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_arrived_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    check_result_in_calendar: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    asap_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    processing_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    check_payment_in_calendar: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    archive_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    allow_reminder: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    in_todo_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    send_sms_to_patient_wl: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    send_email_to_ct_wl: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    arrived_check_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    scan_check_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    processing_check_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    time_log_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    instant_row_in_status_log: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    being_scanned_check_list: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    deny_delete_referral: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    check_payment_terms: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    unchangeable_price_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    disallow_safe_delete: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    always_display: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_simplant: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_deleted_appontment_archive_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_surgical_guide_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    send_mail_while_scan_upload: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status_type: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_appointments_statuses',
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
