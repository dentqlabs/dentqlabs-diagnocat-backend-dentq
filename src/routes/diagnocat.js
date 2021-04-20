// import * as diagnocatController from '../controllers/diagnocat';
const axios = require('axios');

const express = require('express');
const router = express.Router();

router.get('/', getPatients);
router.get('/patients', getPatients);
router.post('/patients/add', createPatient);

const DIAGNOCAT_URL  = 'https://eu.diagnocat.com/partner-api/v2';
const DIAGNOCAT_PATIENTS = '/patients';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjY2OCwidXNlcl9pZCI6NjcxLCJlbWFpbCI6ImFyaUBjdC1kZW50LmNvbSIsInRva2VuX3R5cGUiOiJwYXJ0bmVyX2FwaSIsImlzcyI6MTYwNzYxNDYzMiwidHMiOjE2MDc2MTQ2MzJ9.iz2eqRG9-tbsSOAH1KVCgZ1TW2SNGvONKb7g2biVUeM';

const instance = axios.create({
    baseURL: DIAGNOCAT_URL,
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
});

async function getPatients(req, res) {
    instance.get(DIAGNOCAT_PATIENTS)
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

async function createPatient(req, res) {
    const { patient } = req.body;

    instance.post(DIAGNOCAT_PATIENTS,patient, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}



module.exports = router;