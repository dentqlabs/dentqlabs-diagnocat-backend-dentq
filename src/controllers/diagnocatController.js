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

exports.createStudy = async function(req, res) {
    const { uid } = req.params;
    //Enum:"CBCT" "FMX" "PANORAMA" "DENTAL_PHOTO"
    let studyRequest = {
        patient_uid: uid,
        study_type: 'CBCT',
        study_date: '2020-02-01',
            // Date.now(), //TODO: string
        is_post_op: false
    }

    instance.post(`/patients/${uid}/studies`, studyRequest)
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



//Request Analysis:
exports.requestAnalysis = async function(req, res) {
    v1Instance.post(`/analysis/request`, req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

