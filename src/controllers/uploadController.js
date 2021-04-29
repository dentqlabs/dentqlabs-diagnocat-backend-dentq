const axios = require('axios');
const instance = require('../axios').v1_instance;

const DIAGNOCAT_UPLOAD_OPEN_SESSION = '/upload/open-session';
const DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS = '/upload/request-upload-urls';
const DIAGNOCAT_UPLOAD_PROGRESS_NOTIFY = '/upload/progress-notify';

const DIAGNOCAT_START_SESSION_CLOSE = '/upload/start-session-close';
const DIAGNOCAT_SESSION_INFO = '/upload/session-info';

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

        let uploadUrls = await requestUploadUrls(uploadUrlsRequest);
        // console.log(uploadUrls.data.upload_urls);

        let cloudStorageUrl = uploadUrls.data.upload_urls[0].url;

        //3. for each url - upload file
        let googleResponse = await uploadFiles(cloudStorageUrl, req.file);
        let etag = googleResponse.headers.etag;
        // console.log(etag);

        //Progress Notify;
        //TODO:
        const progressNotifyRequest = {
            session_id: sessionId,
            updates: [
                {"key": "file1", "etag": etag}
            ]};
        let progressNotifyResponse = await uploadProgressNotify(progressNotifyRequest);
        console.log(progressNotifyResponse.data);

        //Start session close:
        let startProcessingResponse = await startSessionProcessing({session_id: sessionId});
        console.log(startProcessingResponse.data);


        //Check session info:
        let res1 = await checkSessionInfo(sessionId);
        console.log(res1.data);

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
exports.uploadFiles = uploadFiles;
async function uploadFiles(diagnocatStorageUrl, file) {
    // console.log(diagnocatStorageUrl, file);
    return axios.put(diagnocatStorageUrl, file,
        {
            headers:  {'Content-Type': 'application/json'},
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        }
    );
}

//3. Notify the server of upload progress, if needed
/**
 * Notify server of progress being made in uploading session.
 * Client is required to periodically call this method (recommended interval is 5 seconds).
 * While session is active, client should call this method at least every 30 seconds.
 */
exports. uploadProgressNotify = uploadProgressNotify;
async function uploadProgressNotify(req) {
    const {session_id, keys} = req;

    //TODO: send this request every 30 seconds
    return instance.post(DIAGNOCAT_UPLOAD_PROGRESS_NOTIFY, {session_id, keys}, { headers:  {'Content-Type': 'application/json'}})
}


//4. Start session processing
/**
 * Signal that all files were uploaded and close session.
 * After this call, session status will immediately change to closing ,
 * and then will change to closed after the server finished processing session files.
 */
exports.startSessionProcessing = startSessionProcessing;
async function startSessionProcessing(req) {
    return instance.post(DIAGNOCAT_START_SESSION_CLOSE, req, { headers:  {'Content-Type': 'application/json'}});
}

//5.Wait for processing to finish checking status by requesting:
//GET /v1/upload/session-info?session_id=764b299d-51d0-ac01-f325-ba45f8c02df4
exports.checkSessionInfo = checkSessionInfo;
async function checkSessionInfo(sessionId) {
    return instance.get(`/upload/session-info?session_id=${sessionId}`);
}
