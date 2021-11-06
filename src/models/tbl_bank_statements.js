const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_bank_statements', {
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
    file: {
      type: DataTypes.STRING(1024),
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
    uploaded_in_s3: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_bank_statements',
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
