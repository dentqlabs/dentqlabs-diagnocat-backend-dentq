const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_outsource', {
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
    appointment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    provider: {
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
    link: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    approved: {
      type: DataTypes.DATE,
      allowNull: false
    },
    approved_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uploaded_in_s3: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_outsource',
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
