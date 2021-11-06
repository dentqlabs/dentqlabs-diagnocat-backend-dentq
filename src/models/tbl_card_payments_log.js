const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_card_payments_log', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    payer_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cc_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    processed_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    result: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    processed: {
      type: DataTypes.DATE,
      allowNull: false
    },
    result_details: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    manual_payment: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_card_payments_log',
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
