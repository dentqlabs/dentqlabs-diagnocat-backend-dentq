const Sequelize = require('sequelize');

const db = {}

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_URL,
        port: process.env.DB_PORT || '3306',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        operatorsAliases: false,
    },
)

const models = [
    require('../models/tbl_users'),
    require('../models/diagnocat_patients'),
    require('../models/tbl_appointments'),
];

// Initialize models
models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.diagnocat_patients.hasMany(db.tbl_appointments, {
    foreignKey: 'diagnocat_patient_id',
    as: "appointments",
})

db.tbl_appointments.belongsTo(db.diagnocat_patients, {
    foreignKey: 'diagnocat_patient_id',
    as: "appointments",
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;