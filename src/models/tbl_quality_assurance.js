const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_quality_assurance', {
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
    image: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    '2d_rating': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    '2d_notes': {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    cbct_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cbct_error: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cbct_notes: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_quality_assurance',
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
