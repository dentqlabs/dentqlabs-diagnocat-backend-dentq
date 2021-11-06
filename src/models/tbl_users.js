const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seskey: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activation_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    activated: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    opened_boxes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sales_database_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    day_started_working: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sales_rep: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    unsecure_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    enable_auto_respond_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    multi_pc_login: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    enable_management_module: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    enable_expenses_tab: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbl_users',
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
