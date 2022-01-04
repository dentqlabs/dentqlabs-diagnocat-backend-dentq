const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_lecture_feedback', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invitation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_4: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    future_topics: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gdc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_lecture_feedback',
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
