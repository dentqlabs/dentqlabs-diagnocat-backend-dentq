const instance = require('../axios').v1_instance;

const DIAGNOCAT_UPLOAD_OPEN_SESSION = '/upload/open-session';
const DIAGNOCAT_UPLOAD_REQUEST_UPLOAD_URLS = '/upload/request-upload-urls';

//1. Open uploading session:
//Session expires in 5 minutes in case of absence of progress-notify requests.
//TODO: option to add study to req JSON
exports.openSession = async function(req, res) {
    const uid = req.body;
    console.log(uid);
    instance.post(DIAGNOCAT_UPLOAD_OPEN_SESSION,uid, { headers:  {'Content-Type': 'application/json'}})
        .then(response => {
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
        })
        .catch((e) => {
            res.send(e);
        });
}
