const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_justifications', {
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    on_2d_imaging: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    on_mandible: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    on_maxilla: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    on_both_jaws: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    on_ortho: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    on_quadrant: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    on_sectional: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    full_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_justifications',
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
