const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_lecture_invitations', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lecture_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    email: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    phone: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    added_from: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    payment_state: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    paid_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mark_paid_manually: {
      type: DataTypes.DATE,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    note_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    note_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attended_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attended_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    feedack_email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    feedback_received: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    encrypted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gdc_number: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    elearning_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_lecture_invitations',
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
    ]
  });
};
