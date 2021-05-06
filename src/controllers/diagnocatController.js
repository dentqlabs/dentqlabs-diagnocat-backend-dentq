const instance = require('../axios').v2_instance;
const v1Instance = require('../axios').v1_instance;

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

//create patient
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

//delete patient
exports.deletePatient = async function(req, res) {
    const { patientUID } = req.body;
    instance.post(`delete/patients/${patientUID}`,patient)
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

exports.createStudy = async function(req, res) {
    const { uid } = req.params;
    let date  = new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-');
    //TODO: Enum:"CBCT" "FMX" "PANORAMA" "DENTAL_PHOTO"
    let studyRequest = {
        patient_uid: uid,
        study_type: 'CBCT',
        study_date: date,
        is_post_op: false
    }

    instance.post(`/patients/${uid}/studies`, studyRequest)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((e) => {
            console.log(e);
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

//Request Analysis:
exports.requestAnalysis = async function(req, res) {
    const { studyUID } = req.params;

    instance.post(`/studies/${studyUID}/analyses`, req.body)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((e) => {
            console.log(e);
            res.send(e);
        });
}

//Fetch analysis:
exports.getAnalysis = async function(req, res) {
    const { analysisUID } = req.params;

    instance.get(`/analyses/${analysisUID}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((e) => {
            console.log(e);
            res.send(e);
        });
}

