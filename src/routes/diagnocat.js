const diagnocatController = require('../controllers/diagnocatController');
const uploadController = require('../controllers/uploadController');
const Multer = require('multer');


// Multer is required to process file uploads and make them available via
// req.files.
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 1000 * 1024 * 1024, // no larger than 500mb.
    },
});

const express = require('express');
const router = express.Router();

router.get('/patients', diagnocatController.getPatients);
router.post('/patients', diagnocatController.createPatient);
router.get('/patients/:uid/studies', diagnocatController.getPatientStudies);

router.get('/studies/:studyUID/images', diagnocatController.getStudyImages);
router.get('/studies/:studyUID/analyses', diagnocatController.getStudyAnalyses);

router.post('/upload/start-upload',multer.single('file'), uploadController.startUpload);


router.post('/upload/open-session', uploadController.openSession);
router.post('/upload/request-upload-urls', uploadController.requestUploadUrls);
router.post('/upload/upload-files', uploadController.uploadFiles);
router.post('/upload/progress-notify', uploadController.uploadProgressNotify);
router.post('/upload/start-session-close', uploadController.startSessionProcessing);
router.post('/upload/session-info', uploadController.checkSessionInfo);




module.exports = router;
