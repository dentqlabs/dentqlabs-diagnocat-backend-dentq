const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_invoices', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    invoice_month: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: "0000-00-00"
    },
    surcharge: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cheque: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    marked_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    top_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    items: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    invoice_sent: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    paid_online: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    reminder_sent: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    dpn_spoke_with: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dpn_payment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    dpn_notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dpn_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    dpn_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    charge_return: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    updated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uploaded_in_s3: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_invoices',
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
        name: "invoice_date",
        using: "BTREE",
        fields: [
          { name: "invoice_date" },
        ]
      },
      {
        name: "due_date",
        using: "BTREE",
        fields: [
          { name: "due_date" },
        ]
      },
      {
        name: "invoice_month",
        using: "BTREE",
        fields: [
          { name: "invoice_month" },
        ]
      },
    ]
  });
};
