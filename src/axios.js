const axios = require('axios');
const DIAGNOCAT_V2_URL = process.env.DIAGNOCAT_V2_URL;
const DIAGNOCAT_V1_URL = process.env.DIAGNOCAT_V1_URL;
const CTDENT_URL = process.env.CTDENT_URL;
// const CTDENT_URL = 'https://sandbox.api.v1.ct-dent.co.uk/api/'

const CTDENT_API_KEY = process.env.CTDENT_API_KEY;

const token = process.env.DIAGNOCAT_TOKEN;

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
