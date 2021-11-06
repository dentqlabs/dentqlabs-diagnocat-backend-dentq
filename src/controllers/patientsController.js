const {diagnocat_patients, tbl_appointments} = require('../utils/database');
const Sequelize = require('sequelize');

const getPatients = async (req, res, next) =>{
    const {offset, limit, fullName} = req.query;
    const query = {
        include: [{
            model: tbl_appointments,
            as: "appointments",
            attributes: ["diagnocat_status"],
            nested: false,
            required: true,            
        }],
        raw: true,        
        subQuery:false,
    }

    if (limit) query.limit = parseInt(limit)
    if (offset) query.offset = parseInt(offset);
    if (fullName){
        query.where = 
            Sequelize.where(Sequelize.fn("CONCAT_WS", " ", Sequelize.col("first_name"), Sequelize.col("last_name")), {
                [Sequelize.Op.like]: `%${fullName}%`
            })
    }

    const patients = await diagnocat_patients.findAll(query,);
    res.json({data: patients}).end();
}

module.exports = {
    getPatients
}