const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_lectures', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    place: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price_for_registered: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    price_for_unregistered: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    max_participants: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cpd_hours: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    certificate_extra_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    display_in_website: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    elearning_course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_lectures',
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
