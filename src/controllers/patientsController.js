const {diagnocat_patients, tbl_appointments, getOrderDirection} = require('../utils/database');
const Sequelize = require('sequelize');
const _ = require('lodash');
const moment = require('moment');
const { formatResponse, successResponse, errorResponse } = require('../utils/response');
const { createDiagnocatPatient } = require('../services/diagnocat-service');

const createPatient = async (req, res, next) => {
    try{
        const {appointmentId, 
            firstName, 
            lastName, 
            dateOfBirth, 
            gender, 
            assignedRadiologistId, 
            radiologistMessage,
            refferingDoctor,
            createDiagnocat} =  req.body;
    
        if (!appointmentId   || isNaN(appointmentId)){
            const response = errorResponse(0, `Appointment # ${appointmentId} required`)
            return res.json(response);
        }

        const now = moment().format('Y-M-D h:m:s')
        const patient = await diagnocat_patients.create({
            first_name: firstName || null,
            last_name: lastName || null,
            dob: dateOfBirth || null,
            gender: gender || null,
            created_at: now,
            updated_at: now,
        });

        const appointment = await tbl_appointments.findOne({
            where: {id: appointmentId}
        });

        if (appointment){
            appointment.diagnocat_patient_id = patient.id;

            if (radiologistMessage){
                appointment.radiologist_message = radiologistMessage;
            }

            if (assignedRadiologistId){
                appointment.assigned_radiologist = assignedRadiologistId;
            }

            if (refferingDoctor){
                appointment.referring_doctor = refferingDoctor;
            }

            await appointment.save();
        }

        if (createDiagnocat === 1){
            try{
                const diagnocatPatient = await createDiagnocatPatient(patient);
                patient.diagnocat_uid = diagnocatPatient?.data?.uid;
                await patient.save();
            }catch (error){
                console.log("create diagnocat patient error", error.message);
            }
        }
        const response = successResponse(1, `Patient # ${patient.id} created`, patient);
        res.json(response);
    }catch (error){
        console.log(error);
        res.status(500).end();
    }

}

const getPatients = async (req, res, next) =>{
    const {offset, limit, fullName, orderBy, orderDirection} = req.query;
    const query = {
        include: [{
            model: tbl_appointments,
            as: "appointments",
            attributes: ["diagnocat_status"],
            nested: false,
            required: true,            
        }],
        raw: true,        
        subQuery: false,
    }

    if (orderBy) query.order = [[orderBy, getOrderDirection(orderDirection)]];
    if (limit) query.limit = parseInt(limit);
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
    getPatients,
    createPatient
}