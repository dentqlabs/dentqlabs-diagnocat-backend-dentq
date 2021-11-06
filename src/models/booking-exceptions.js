const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking-exceptions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    calendar_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    closed_all_day: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    day_of_week: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 = Monday"
    },
    closed_from: {
      type: DataTypes.TIME,
      allowNull: true
    },
    closed_to: {
      type: DataTypes.TIME,
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
    tableName: 'booking-exceptions',
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
