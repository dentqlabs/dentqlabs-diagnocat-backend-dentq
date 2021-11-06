const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_testimonials', {
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
    photo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    testimonial: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_testimonials',
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
