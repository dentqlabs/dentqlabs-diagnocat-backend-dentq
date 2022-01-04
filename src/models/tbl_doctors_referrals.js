const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_doctors_referrals', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    colleagues_name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    colleagues_email: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    referral_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    refferal_used: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unregister_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    register_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_patient_mail: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    encrypted: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_doctors_referrals',
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
