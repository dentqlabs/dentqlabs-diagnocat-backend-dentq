const axios = require('axios');
const DIAGNOCAT_V2_URL  = 'https://eu.diagnocat.com/partner-api/v2';
const DIAGNOCAT_V1_URL  = 'https://eu.diagnocat.com/partner-api/v1';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjY2OCwidXNlcl9pZCI6NjcxLCJlbWFpbCI6ImFyaUBjdC1kZW50LmNvbSIsInRva2VuX3R5cGUiOiJwYXJ0bmVyX2FwaSIsImlzcyI6MTYwNzYxNDYzMiwidHMiOjE2MDc2MTQ2MzJ9.iz2eqRG9-tbsSOAH1KVCgZ1TW2SNGvONKb7g2biVUeM';

const v2_instance = axios.create({
    baseURL: DIAGNOCAT_V2_URL,
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
});

const v1_instance = axios.create({
    baseURL: DIAGNOCAT_V1_URL,
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
});

module.exports = {v2_instance, v1_instance};
