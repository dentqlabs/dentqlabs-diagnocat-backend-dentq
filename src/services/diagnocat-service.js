const {v1_instance} = require('../axios');
const CREATE_PATIENT_URL = '/patient/create';

const createDiagnocatPatient = async (data) =>{
    const patient = {
        patient_id: data.id.toString(),
        name_part1: data.first_name,
        name_part2: data.last_name,
        date_of_birth: data.dob,
        gender: data.gender
    };

    const result = await v1_instance.post(CREATE_PATIENT_URL, patient);
    return result;
}

module.exports = {
    createDiagnocatPatient
}; 