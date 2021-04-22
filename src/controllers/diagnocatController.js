const instance = require('../axios').v2_instance;

const DIAGNOCAT_PATIENTS = '/patients';
const DIAGNOCAT_PATIENT_STUDIES = '/patients/:uid/studies';

//Patients
exports.getPatients = async function(req, res) {
    instance.get(DIAGNOCAT_PATIENTS)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

exports.createPatient = async function(req, res) {
    const { patient } = req.body;

    instance.post(DIAGNOCAT_PATIENTS,patient, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}


// Studies
//http://localhost:3000/diagnocat/patients/9a0dc18a-07dd-3177-41f9-bab003ed4df4/studies

exports.getPatientStudies = async function(req, res) {
    const { uid } = req.params;

    instance.get(`/patients/${uid}/studies`)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

//Images

//List Images in Study
//http://localhost:3000/diagnocat/studies/17fa2128-e982-48fa-3418-5f9f5c492573/images
exports.getStudyImages = async function(req, res) {
    const { studyUID } = req.params;

    instance.get(`/studies/${studyUID}/images`)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}


// Analyses

//List Analyses for Study
//http://localhost:3000/diagnocat/studies/17fa2128-e982-48fa-3418-5f9f5c492573/images
exports.getStudyAnalyses = async function(req, res) {
    const { studyUID } = req.params;

    instance.get(`/studies/${studyUID}/analyses`)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

