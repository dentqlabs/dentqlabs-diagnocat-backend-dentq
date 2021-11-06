const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking-calendar', {
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
    start_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    duration_in_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maximum_slots: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    monday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    tuesday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    wednesday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    thursday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    friday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    saturday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    sunday: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'booking-calendar',
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
