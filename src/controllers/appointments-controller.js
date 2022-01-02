
const {tbl_branches, 
    tbl_doctors, 
    tbl_appointments, 
    tbl_appointments_statuses,
    tbl_shared_appointments2doctors,
    decode} = require('../utils/database');
const _ = require('lodash');
const Sequelize = require('sequelize');
const { successResponse } = require('../utils/response');
const { eq } = require('lodash');


/*
    returns list of appointments
    query parameters:
        offset (optional):      specifies which row data will be retrieved
        limit (optional):       maximum number of rows to return
        patientId (optional):   will only return appointments associated to the patient id, 
                                will return all appoitments if not specified
*/
const getAppointments = async (req, res) => {
    try{
        const {offset, limit, patientId} = req.query;
        if (!offset) return res.status(500).end();
        if (!limit) return res.status(500).end();
        const query = {
            attributes:[
                "id",
                "branch_id",
                "appointment_date",
                "diagnocat_link",
                "diagnocat_pdf",
                "diagnocat_status",
                "assigned_radiologist",
                "radiologist_message",
                "diagnocat_patient_id",
                "doctor_id",
                "doctor_instructions",
                "ct_dent_comments",
                "extra_comments",
                "is_report",
                "status_id",
                "payment",
                "area",
                "cadcam_area",
                "radiographic_template",
                "radiographic_template_option",
                "pregnancy",
                "teeths",
                "formats",
                "outputs",
                "justifications",
                "d2d",
                "d2d_outputs",
                decode('patient_full_name'),
                decode('patient_dob'),
                decode('patient_phone'),
                decode('patient_mobile'),
                decode('patient_email'),
                decode('by_patient_doctor'),
                decode('by_patient_doctor_email'),
                decode('by_patient_practice'),
                decode('patient_gender'),
                decode('patient_address_1'),
                decode('patient_address_2'),
                decode('patient_address_3'),
                decode('patient_city'),
                decode('patient_state'),
                decode('patient_postcode'),
                decode('tbl_doctor.full_name', 'doctor_full_name'),
                decode('tbl_doctor.email_1', 'doctor_email'),
                decode('tbl_doctor.p_address_1', 'doctor_practice_address_1'),
                decode('tbl_doctor.p_address_2', 'doctor_practice_address_2'),
                decode('tbl_doctor.p_address_3', 'doctor_practice_address_3'),
                decode('tbl_doctor.p_city', 'doctor_practice_city'),
                decode('tbl_doctor.p_postcode', 'doctor_practice_postcode'),
                decode('tbl_doctor.contact_number', 'doctor_contact_number'),
                [Sequelize.col('tbl_branch.name'), 'branch_name'], 
                [Sequelize.col('tbl_appointments_status.name'), 'status_name'],
                [Sequelize.col('tbl_appointments_status.color_description'), 'status_color_description'],
                [Sequelize.col('tbl_appointments_status.color'), 'status_color_background'],
                [Sequelize.col('tbl_appointments_status.text_color'), 'status_color_foreground'],
                [Sequelize.col('tbl_appointments_status.in_waiting_list'), 'in_waiting_list'],
                [Sequelize.col('tbl_shared_appointments2doctors.doctor_id'), 'shared_doctor_id'],

            ],
            offset: parseInt(offset),
            limit: parseInt(limit),
            include: [
                {
                    model: tbl_doctors,
                    attributes: [],
                    nested: false,
                    required: false,            
                },
                {
                
                    model: tbl_branches,
                    attributes: [],
                    nested: false,
                    required: false,            
                    
                },
                {
                    model: tbl_appointments_statuses,
                    attributes: [],
                    nested: false,
                    required: false,
                },
                {
                    model: tbl_shared_appointments2doctors,
                    attributes: [],
                    nested: false,
                    required: false,
                }
            ],
            raw: true,        
            subQuery:false,
            where: {}
        }

        if (patientId){
            query.where.diagnocat_patient_id = patientId
        }

        const patients = await tbl_appointments.findAll(query,);
        res.json({data: patients}).end();
    }catch(error){
        console.error(error);
        res.status(500).end();
    }
}

/*
    return appointment by appointment id
    url parameter:
        id (required): specifies which appointment id to retrieve
*/
const getAppointment = async (req, res) => {
    try{
        const {id} = req.params;

        const query = {
            attributes:[
                // "id",
                // "branch_id",
                // "appointment_date",
                // "diagnocat_link",
                // "diagnocat_pdf",
                // "diagnocat_status",
                // "assigned_radiologist",
                // "radiologist_message",
                // "diagnocat_patient_id",
                // "doctor_id",
                // "doctor_instructions",
                // "ct_dent_comments",
                // "extra_comments",
                // "is_report",
                // "status_id",
                // "payment",
                // "area",
                // "cadcam_area",
                // "radiographic_template",
                // "radiographic_template_option",
                // "pregnancy",
                // "teeths",
                // "formats",
                // "outputs",
                // "justifications",
                // "d2d",
                // "d2d_outputs",
                decode('patient_full_name'),
                decode('patient_dob'),
                // decode('patient_phone'),
                // decode('patient_mobile'),
                // decode('patient_email'),
                // decode('by_patient_doctor'),
                // decode('by_patient_doctor_email'),
                // decode('by_patient_practice'),
                decode('patient_gender'),
                // decode('patient_address_1'),
                // decode('patient_address_2'),
                // decode('patient_address_3'),
                // decode('patient_city'),
                // decode('patient_state'),
                // decode('patient_postcode'),
                // decode('tbl_doctor.full_name', 'doctor_full_name'),
                // decode('tbl_doctor.email_1', 'doctor_email'),
                // decode('tbl_doctor.p_address_1', 'doctor_practice_address_1'),
                // decode('tbl_doctor.p_address_2', 'doctor_practice_address_2'),
                // decode('tbl_doctor.p_address_3', 'doctor_practice_address_3'),
                // decode('tbl_doctor.p_city', 'doctor_practice_city'),
                // decode('tbl_doctor.p_postcode', 'doctor_practice_postcode'),
                // decode('tbl_doctor.contact_number', 'doctor_contact_number'),
                // [Sequelize.col('tbl_branch.name'), 'branch_name'], 
                // [Sequelize.col('tbl_appointments_status.name'), 'status_name'],
                // [Sequelize.col('tbl_appointments_status.color_description'), 'status_color_description'],
                // [Sequelize.col('tbl_appointments_status.color'), 'status_color_background'],
                // [Sequelize.col('tbl_appointments_status.text_color'), 'status_color_foreground'],
                // [Sequelize.col('tbl_appointments_status.in_waiting_list'), 'in_waiting_list'],
                // [Sequelize.col('tbl_shared_appointments2doctors.doctor_id'), 'shared_doctor_id'],

            ],
            where: {
                'id': id
            },
            // include: [
            //     {
            //         model: tbl_doctors,
            //         attributes: [],
            //         nested: false,
            //         required: false,            
            //     },
            //     {
                
            //         model: tbl_branches,
            //         attributes: [],
            //         nested: false,
            //         required: false,            
                    
            //     },
            //     {
            //         model: tbl_appointments_statuses,
            //         attributes: [],
            //         nested: false,
            //         required: false,
            //     },
            //     {
            //         model: tbl_shared_appointments2doctors,
            //         attributes: [],
            //         nested: false,
            //         required: false,
            //     }
            // ],
            raw: true,        
            subQuery:false,
        }
        const patients = await tbl_appointments.findOne(query,);
        res.json({data: patients}).end();
    }catch(error){
        console.error(error);
        res.status(500).end();
    }

}

/*
    update appointment row
    url parameter:
        id (required): specifies which appointment to update
    body: JSON , data to replace existing record
*/
const updateAppointment = async (req, res) => {
    const {id} = req.params;
    const {fields} = req.body;

    if (!id || isNaN(id) || !fields || fields.length <=0) return res.status(500).end();
    
    const appointment = await tbl_appointments.findOne({
        where: {
            id: id
        }
    });

    if (!appointment) res.status(404).end();

    for(const field of fields){
        if (!field.name) continue;
        appointment[field.name] = field.value;
    }

    const result = await appointment.save();
    const response = successResponse(1, `Diagnocat Appointment ID#  ${result.id} updated`);
    res.json(response);
}

/*
    update the appointment link
    body:
        id: specifies the appointment to update
        diagnocat_link: link url to save
        diagnocat_pdf:  pdf to save
*/
const saveAppointmentDiagnocatLinks = async (req,res) =>{
    try{
        const {id, diagnocat_link, diagnocat_pdf} = req.body;

        const appointment = await tbl_appointments.findOne({
            where: {
                id: id
            }
        });

        if (!appointment) res.status(404).end();

        appointment.diagnocat_link = diagnocat_link;
        appointment.diagnocat_pdf = diagnocat_pdf;

        await appointment.save();
        const response = successResponse(1, `Diagnocat Appointment ID#  ${id} updated`);
        res.json(response);
    }catch (error)
    {
        console.log(error);
        res.status(500).end();
    }
}

/*
    save diagnocat link to appointment data
    body:
        id:             specifies the appointment to update
        diagnocal_link: link path generated by diagnocat to save
*/
const saveAppointmentDiagnocatLink = async (req,res) =>{
    try{

        const {id, diagnocat_link} = req.body;
        const appointment = await tbl_appointments.findOne({
            where: {
                id: id
            }
        });
        
        if (!appointment) res.status(404).end();

        appointment.diagnocat_link = diagnocat_link;
        const result = await appointment.save();

        console.log("result", result.id, result.diagnocat_link);
        const response = successResponse(1, `Diagnocat Appointment ID#  ${result.id} updated`);
        res.json(response);
    }catch (error)
    {
        console.log(error);
        res.status(500).end();
    }
}

module.exports = {
    saveAppointmentDiagnocatLink,
    saveAppointmentDiagnocatLinks,
    updateAppointment,
    getAppointment,
    getAppointments
}