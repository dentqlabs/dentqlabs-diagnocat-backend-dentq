const axios = require('axios');
const instance = require('../axios').v1_instance;

const DIAGNOCAT_UPLOAD_OPEN_SESSION = '/upload/open-session';
const DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS = '/upload/request-upload-urls';
const DIAGNOCAT_UPLOAD_PROGRESS_NOTIFY = '/upload/progress-notify';

const DIAGNOCAT_START_SESSION_CLOSE = '/upload/start-session-close';
const DIAGNOCAT_SESSION_INFO = '/upload/session-info';

//1. Open uploading session:
//Session expires in 5 minutes in case of absence of progress-notify requests.
exports.openSession = openSession;
async function openSession(req, res) {
    const {uid, study_uid} = req.body;
    let openSessionResponse = await instance.post(DIAGNOCAT_UPLOAD_OPEN_SESSION,{uid, study_uid});
    console.log(openSessionResponse.data);
    res.send(openSessionResponse.data);
}

//2. Add files to session:
exports.requestUploadUrls = requestUploadUrls;
async function requestUploadUrls(req, res) {
    const {session_id, keys} = req.body
    let requestUploadUrlsResponse = await instance.post(DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS, {session_id, keys}, { headers:  {'Content-Type': 'application/json'}});
    console.log(requestUploadUrlsResponse.data);
    res.send(requestUploadUrlsResponse.data);
}

//2.1. PUT request should be sent to a URL received via request-upload-urls, in order to upload the files.
// exports.uploadFiles = uploadFiles;
// async function uploadFiles(req, res) {
//     if (!req.file) {
//         res.status(400).send('No file uploaded.');
//         return;
//     }
//
//     let putFileRes = await axios.put(req.body.url, req.file,
//         {
//             headers:  {'Content-Type': 'application/json'},
//             maxContentLength: Infinity,
//             maxBodyLength: Infinity
//         }
//     );
//     console.log('file uploaded. etag: ' + putFileRes.headers.etag);
//
//     res.status(200).send(putFileRes.headers.etag);
// }

//3. Notify the server of upload progress, if needed
/**
 * Notify server of progress being made in uploading session.
 * Client is required to periodically call this method (recommended interval is 5 seconds).
 * While session is active, client should call this method at least every 30 seconds.
 */
exports. uploadProgressNotify = uploadProgressNotify;
async function uploadProgressNotify(req, res) {
    let uploadProgressNotifyRes = await instance.post(DIAGNOCAT_UPLOAD_PROGRESS_NOTIFY, req.body, { headers:  {'Content-Type': 'application/json'}})
    console.log(uploadProgressNotifyRes.data);
    res.send(uploadProgressNotifyRes.data);
}


//4. Start session processing
/**
 * Signal that all files were uploaded and close session.
 * After this call, session status will immediately change to closing ,
 * and then will change to closed after the server finished processing session files.
 */
exports.startSessionProcessing = startSessionProcessing;
async function startSessionProcessing(req, res) {
    let sessionCloseRequest = await instance.post(DIAGNOCAT_START_SESSION_CLOSE, req.body);
    console.log(sessionCloseRequest.data);
    res.send(sessionCloseRequest.data);
}

//5.Wait for processing to finish checking status by requesting:
//GET /v1/upload/session-info?session_id=764b299d-51d0-ac01-f325-ba45f8c02df4
exports.checkSessionInfo = checkSessionInfo;
async function checkSessionInfo(req, res) {
    const sessionId = req.body.session_id;
    let sessionInfoResponse = await instance.get(`/upload/session-info?session_id=${sessionId}`);
    console.log(sessionInfoResponse.data);
    res.send(sessionInfoResponse.data);
}
