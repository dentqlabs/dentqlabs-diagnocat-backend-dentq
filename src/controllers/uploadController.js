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

    const uid = {uid: "a4b51645-639a-7dc8-89b2-260e43ded522"}; //TODO: get from req
    // console.log(req.file);

    try {

        //1. open session
        let openSessionResponse = await openSession(uid);
        let sessionId = openSessionResponse.data.session_id;
        // console.log(sessionId);

        //2. request upload urls
        const uploadUrlsRequest = {
            session_id: sessionId,
            keys: ["file1"]
        }

        let a = await requestUploadUrls(uploadUrlsRequest);
        // console.log(a.data.upload_urls);

        let diagnocatStorageUrl = a.data.upload_urls[0];

        //3. for each url - upload file
        let googleResponse = await uploadFiles(uploadUrlsRequest, req.file);
        console.log(googleResponse);
        console.log('googleResponse');

        res.send(sessionId);
    } catch (e) {
        res.send(e);
    }

}

//1. Open uploading session:
//Session expires in 5 minutes in case of absence of progress-notify requests.
//TODO: option to add study to req JSON
exports.openSession = openSession;
async function openSession(uid) {
    return instance.post(DIAGNOCAT_UPLOAD_OPEN_SESSION,uid, { headers:  {'Content-Type': 'application/json'}});
}

//2. Add files to session:
exports.requestUploadUrls = requestUploadUrls;
async function requestUploadUrls(uploadUrlsRequest) {
    const {session_id, keys} = uploadUrlsRequest;
    return instance.post(DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS, {session_id, keys}, { headers:  {'Content-Type': 'application/json'}});
}

//2.1. PUT request should be sent to a URL received via request-upload-urls, in order to upload the files.
uploadFiles = async function(uploadUrlsRequest, file) {
    return axios.put(uploadUrlsRequest, file, { headers:  {'Content-Type': 'application/json'}});
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

