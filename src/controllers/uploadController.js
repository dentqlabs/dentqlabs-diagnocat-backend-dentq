const axios = require('axios');
const instance = require('../axios').v1_instance;

const DIAGNOCAT_UPLOAD_OPEN_SESSION = '/upload/open-session';
const DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS = '/upload/request-upload-urls';
const DIAGNOCAT_UPLOAD_PROGRESS_NOTIFY = '/upload/progress-notify';

exports.startUpload = async function(req, res) {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    console.log(req.file);
    return openSession(req, res);
}

//1. Open uploading session:
//Session expires in 5 minutes in case of absence of progress-notify requests.
//TODO: option to add study to req JSON
exports.openSession = openSession;

async function openSession(req, res) {
    const uid = req.body;
    console.log(uid);
    instance.post(DIAGNOCAT_UPLOAD_OPEN_SESSION,uid, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

//2. Add files to session:
exports.requestUploadUrls = async function(req, res) {
    const {session_id, keys} = req.body;
    instance.post(DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS, {session_id, keys}, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
            res.send(response.data);
            //TODO: uploadFiles
        })
        .catch((e) => {
            res.send(e);
        });
}

//2.1. PUT request should be sent to a URL received via request-upload-urls, in order to upload the files.
uploadFiles = async function(req, res) {
    let diagnocatStorageUrl = req.url;
    let file = {}; //??
    axios.put(diagnocatStorageUrl, file, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}


//3. Notify the server of upload progress, if needed
/**
 * Notify server of progress being made in uploading session.
 * Client is required to periodically call this method (recommended interval is 5 seconds).
 * While session is active, client should call this method at least every 30 seconds.
 */
exports.uploadProgressNotify = async function(req, res) {
    const {session_id, keys} = req.body;
    instance.post(DIAGNOCAT_UPLOAD_PROGRESS_NOTIFY, {session_id, keys}, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
            res.send(response.data);
        })
        .catch((e) => {
            res.send(e);
        });
}

