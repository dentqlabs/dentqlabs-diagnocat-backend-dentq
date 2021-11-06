const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_mails_templates_old', {
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
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    from_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    from_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    template: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allowed_attachments: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allowed_tags: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    allow_print: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_mails_templates_old',
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
