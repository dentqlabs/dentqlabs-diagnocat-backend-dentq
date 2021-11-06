const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_appointments_structure', {
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
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    appointment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    patient_full_name: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_dob: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_phone: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_mobile: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_email: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_requested_copy: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ct_dent_comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pregnancy: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    radiographic_template: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    teeths: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    justifications: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formats: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_format: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    software: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    outputs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    other_output: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    d2d: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    d2d_outputs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extras: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extra_comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    paid_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    special_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    arrived_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    booked_from: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    patient_booking: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    vss: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    processing_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    archived: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    purchase_order: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hospital_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    surgeon_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    by_patient_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    by_patient_doctor: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    by_patient_doctor_email: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    by_patient_practice: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    cd_letter_printed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    zero_price: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    disallow_safe_delete: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    extra_copy_of_appointment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_feedback: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    patient_copy_cc_sent: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    patient_feedback_sent: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    greated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    scanned_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_taken: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_taken_branch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_has_referral: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_was_explained_about_referral: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status_id_before_delete: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    delete_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sent_to_patient: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    duplicate_of: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    extra_comments_copy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pp_patient_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pp_patient_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    pp_doctor_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pp_doctor_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    split_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sp_amount_1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    sp_amount_1_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sp_amount_1_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    sp_amount_2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    sp_amount_2_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sp_amount_2_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    blinking_booked_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    self_check_in: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    paid_by_online: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_report: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_gender: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    comments_and_requests: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    radiology_checkboxes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_scan: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    indication_for_scan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    set_0_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    additional_services: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    surgical_guide_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    as_surgical_guide_teeths: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    as_surgical_guide_instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    as_surgical_guide_sleeves_inserted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    as_radiographic_template_fabrication_teeths: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    radiographic_template_option: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    measurement_report_teeths: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    main_services: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cadcam_teeth: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cadcam_area: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mguide_scan: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scanned_after: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    scanned_after_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    upload_to_invisalign_account: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    add_patient_address: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_address_1: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_address_2: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_address_3: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_city: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_state: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_postcode: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    patient_contry: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    appointment_updated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    encrypted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    scan_upload_email: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    scanned_elsewhere: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    extra_copy_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    offer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    radiographer_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    scan_accepted_by_radiographer: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    message_beofre_15_mnt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paid_by_changed: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_appointments_structure',
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
        name: "doctor_id",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "appointment_date",
        using: "BTREE",
        fields: [
          { name: "appointment_date" },
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
