const axios = require('axios');
const DIAGNOCAT_URL  = 'https://eu.diagnocat.com/partner-api/v2';
const DIAGNOCAT_PATIENTS = '/patients';

const DIAGNOCAT_PATIENT_STUDIES = '/patients/:uid/studies';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjY2OCwidXNlcl9pZCI6NjcxLCJlbWFpbCI6ImFyaUBjdC1kZW50LmNvbSIsInRva2VuX3R5cGUiOiJwYXJ0bmVyX2FwaSIsImlzcyI6MTYwNzYxNDYzMiwidHMiOjE2MDc2MTQ2MzJ9.iz2eqRG9-tbsSOAH1KVCgZ1TW2SNGvONKb7g2biVUeM';

const instance = axios.create({
    baseURL: DIAGNOCAT_URL,
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
});

module.exports = instance;
