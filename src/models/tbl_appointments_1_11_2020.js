const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_appointments_1_11_2020', {
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
      allowNull: false
    },
    patient_full_name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_dob: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_phone: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_mobile: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_email: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_requested_copy: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ct_dent_comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pregnancy: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    radiographic_template: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    teeths: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    justifications: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    formats: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_format: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    software: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    outputs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_output: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    d2d: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    d2d_outputs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extras: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extra_comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    paid_by: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    special_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    arrived_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    booked_from: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    patient_booking: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    vss: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    processing_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    archived: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    purchase_order: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hospital_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    surgeon_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    by_patient_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    by_patient_doctor: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    by_patient_doctor_email: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    by_patient_practice: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    cd_letter_printed: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    zero_price: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    disallow_safe_delete: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    extra_copy_of_appointment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_feedback: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    patient_copy_cc_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    patient_feedback_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    greated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scanned_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_taken: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_taken_branch: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_has_referral: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_was_explained_about_referral: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id_before_delete: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delete_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sent_to_patient: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    duplicate_of: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    extra_comments_copy: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pp: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    pp_patient_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pp_patient_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    pp_doctor_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    pp_doctor_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    split_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sp_amount_1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sp_amount_1_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_amount_1_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sp_amount_2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    sp_amount_2_paid_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sp_amount_2_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    blinking_booked_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    self_check_in: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    paid_by_online: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    is_report: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_gender: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    comments_and_requests: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    radiology_checkboxes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_scan: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    indication_for_scan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    set_0_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    additional_services: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    surgical_guide_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    as_surgical_guide_teeths: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    as_surgical_guide_instructions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    as_surgical_guide_sleeves_inserted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    as_radiographic_template_fabrication_teeths: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    radiographic_template_option: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    measurement_report_teeths: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    main_services: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cadcam_teeth: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cadcam_area: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mguide_scan: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scanned_after: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    scanned_after_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    upload_to_invisalign_account: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    add_patient_address: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_address_1: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_address_2: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_address_3: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_city: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_state: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_postcode: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    patient_contry: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    appointment_updated: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    encrypted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    old_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scan_upload_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    scanned_elsewhere: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    report_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    extra_copy_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    offer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    radiographer_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scan_accepted_by_radiographer: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    message_beofre_15_mnt: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paid_by_changed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_appointments_1_11_2020',
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
