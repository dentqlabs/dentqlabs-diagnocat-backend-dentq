
const {tbl_branches, 
    tbl_doctors, 
    tbl_appointments, 
    tbl_appointments_statuses,
    tbl_shared_appointments2doctors,
    diagnocat_pdfs,
    decode} = require('../utils/database');
const _ = require('lodash');
const Sequelize = require('sequelize');
const { successResponse } = require('../utils/response');

const getAppointments = async (req, res, next) =>{
    try{
        const {offset, limit} = req.query;
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
        }
        const patients = await tbl_appointments.findAll(query,);
        res.json({data: patients}).end();
    }catch(error){
        console.error(error);
        res.status(500).end();
    }
}

const getAppointment = async (req, res, next) =>{
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

const saveAppointmentDiagnocatLinks = async (req,res) =>{
    try{

        const {id, diagnocat_link, diagnocat_pdf} = req.body;
        const appointment = await tbl_appointments.findOne({id: id});

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

const saveAppointmentDiagnocatPDFs = async (req, res) =>{
    try{
        const now = moment().format('Y-M-D h:m:s');
        const {id, list_of_pdfs} = req.body;
        
        if (!_.isArray(list_of_pdfs)){
            res.status(400).end();
        };
        const failed = [];
        for(const item of list_of_pdfs){
            if (!item.type_id || !item.url){
                failed.push('Failed: ' + JSON.stringify(item));
            }else{
                const result = await diagnocat_pdf.create({
                    appointment_id: id,
                    pdf_type: item.type_id,
                    link: item.url,
                    created_at: now,
                    updated_at: now,
                })
            }
        }

        const response = successResponse(1, failed? failed.join('<br />') : `Diagnocat Appointment # ${id} PDFs saved`);
        res.json(response);
    }catch (error){
        console.log(error);
        res.status(500).end();
    }
}

module.exports = {
    saveAppointmentDiagnocatLinks,
    getAppointment,
    getAppointments
}