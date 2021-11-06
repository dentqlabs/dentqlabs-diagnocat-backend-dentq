const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diagnocat_patients', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    diagnocat_uid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'diagnocat_patients',
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
