const Sequelize = require('sequelize');
const {DB_NAME, DB_USERNAME, DB_PASSWORD, DB_URL, DB_PORT, MYSQL_ENCRYPTION} = process.env;
const db = {}

const decode = (field, alias) => [Sequelize.literal('CONVERT(DECODE(' + field.split('.').map(i => '`' + i + '`').join('.') + ', "' + MYSQL_ENCRYPTION + '") using utf8)'), alias || field];

const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_URL,
        port: DB_PORT || '3306',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            charset: 'utf8',
            collate: 'utf8_general_ci', 
            timestamps: true
        
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
    require('../models/users_to_roles'),
    require('../models/user_roles'),
    require('../models/tbl_users'),
    require('../models/tbl_doctors'),
    require('../models/tbl_branches'),
    require('../models/diagnocat_patients'),
    require('../models/tbl_appointments'),
    require('../model/diagnocat_pdf'),
    require('../models/tbl_appointments_statuses'),
    require('../models/tbl_shared_appointments2doctors'),
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

db.tbl_doctors.hasMany(db.tbl_appointments, {
    foreignKey: 'doctor_id',
    as: "appointments",
})
db.tbl_appointments.belongsTo(db.tbl_doctors, {
    foreignKey: 'doctor_id',
});

db.tbl_appointments.belongsTo(db.tbl_branches, {
    foreignKey: 'branch_id',
});

db.tbl_appointments.belongsTo(db.tbl_appointments_statuses, {
    foreignKey: 'status_id'
});

db.tbl_appointments.hasMany(db.tbl_shared_appointments2doctors, {
    foreignKey: 'appointment_id'
});

db.users_to_roles.belongsTo(db.tbl_users, {
    foreignKey: 'user_id',
});

db.users_to_roles.belongsTo(db.user_roles, {
    foreignKey: 'role_id'
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.decode = decode;

module.exports = db;