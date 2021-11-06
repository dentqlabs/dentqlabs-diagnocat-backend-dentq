const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_doctors_agrement_persons', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    gdc: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    main: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    training: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    registration: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    referrer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    operator: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ctdent_to_report: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    encrypted: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_doctors_agrement_persons',
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
