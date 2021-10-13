const axios = require('axios');
const DIAGNOCAT_V2_URL  = 'https://eu.diagnocat.com/partner-api/v2';
const DIAGNOCAT_V1_URL  = 'https://eu.diagnocat.com/partner-api/v1';
//const CTDENT_URL = 'https://api.v1.ct-dent.co.uk/api/'
const CTDENT_URL = 'https://sandbox.api.v1.ct-dent.co.uk/api/'

const CTDENT_API_KEY = '7l6J7u9MeJ91gV35MbbnR2FGCbh2Cof+CnWnYFyvVjg+pV1K5NWiu5FEvOpIV';

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjY2OCwidXNlcl9pZCI6NjcxLCJlbWFpbCI6ImFyaUBjdC1kZW50LmNvbSIsInRva2VuX3R5cGUiOiJwYXJ0bmVyX2FwaSIsImlzcyI6MTYwNzYxNDYzMiwidHMiOjE2MDc2MTQ2MzJ9.iz2eqRG9-tbsSOAH1KVCgZ1TW2SNGvONKb7g2biVUeM';

const v2_instance = axios.create({
    baseURL: DIAGNOCAT_V2_URL,
    timeout: 300000000,
    headers: { Authorization: `Bearer ${token}` },
});

const v1_instance = axios.create({
    baseURL: DIAGNOCAT_V1_URL,
    timeout: 30000,
    headers: { Authorization: `Bearer ${token}` }
});

const ctdentInstance = axios.create({
    timeout: 300000000,
    baseURL: CTDENT_URL,
});

module.exports = {v2_instance, v1_instance, ctdentInstance, CTDENT_API_KEY};
