const {ctdentInstance} = require("../axios");
const {CTDENT_API_KEY} = require("../axios");
const instance = require('../axios').v2_instance;

const DIAGNOCAT_PATIENTS = '/patients';
const DIAGNOCAT_PATIENT_STUDIES = '/patients/:uid/studies';

//Patients
exports.getPatient = async function(req,res) {
    const { patientID } = req.params;

    instance.get(`/patients?patient_id=${patientID}`)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
}


exports.getPatients = async function(req, res) {
    instance.get(DIAGNOCAT_PATIENTS)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.status(500).send(e);
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
            res.status(500).send(e);
        });
}

//delete patient
exports.deletePatient = async function(req, res) {
    const { patientUID } = req.params;

    instance.delete(`/patients/${patientUID}`)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.status(500).send(e);
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
            res.status(500).send(e);
        });
}

/**
 * Creates a request according to requested study type (CBCT, PANORAMA)
 */
exports.createStudy = async function(req, res) {
    const { uid } = req.params;
    const { study_type } = req.body;

    let date  = new Date().toISOString();
    let studyRequest = {
        patient_uid: uid,
        study_type: study_type,
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
            res.status(500).send(e);
        });
}

//delete study
exports.deleteStudy = async function(req, res) {
    const { studyUID } = req.params;

    instance.delete(`/studies/${studyUID}`)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.status(500).send(e);
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
            res.status(500).send(e);
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
            res.status(500).send(e);
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
            res.status(500).send(e);
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
            res.status(500).send(e);
        });
}

//Create a link for doctors:
exports.createDoctorLink = async function(req, res) {
    const { patientUID } = req.params;

    instance.post(`/patients/${patientUID}/shares`, req.body)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((e) => {
            console.log(e);
            res.status(500).send(e);
        });
}

//Script to update all patients ids:
exports.updateAllPatientsIds = async function(req, res) {
    let patients = await instance.get(DIAGNOCAT_PATIENTS);
    let patient = patients.data[0];
    console.log(patient);

    let i,j,temparray,chunk = 50;
    for (i=0,j=patients.data.length; i<j; i+=chunk) {
        temparray = patients.data.slice(i,i+chunk);
        for (const patient of temparray) {
            let ctdent_req = {
                api_key: CTDENT_API_KEY,
                id: -1,
                first_name: patient.name_part2,
                last_name: patient.name_part1,
                dob: patient.date_of_birth,
                gender: patient.gender,
                create_diagnocat: 0
            }
            try {
                let ctdent_res = await ctdentInstance.post('diagnocat/appointment/createpatient', ctdent_req);
                console.log(ctdent_res.data.data.id);
                let patchReq = {
                    "patient_id": ctdent_res.data.data.id.toString(),
                    "attributes":
                        {
                            "patient_id": ctdent_res.data.data.id.toString()
                        }
                }
                instance.patch(`/patients/${patient.uid}`, patchReq)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            } catch (e) {
                console.log(e);
            }
        }
        await timeout(100000);
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

