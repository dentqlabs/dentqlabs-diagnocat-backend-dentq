const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_uploads_new', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    uploaded: {
      type: DataTypes.DATE,
      allowNull: false
    },
    uploaded_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    scanned_referral: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    patient_uploaded: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    manually_uploaded: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    file_download: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_uploads_new',
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
        name: "appointment_id",
        using: "BTREE",
        fields: [
          { name: "appointment_id" },
        ]
      },
    ]
  });
};
