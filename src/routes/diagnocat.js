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

router.get('/patients/:patientID', diagnocatController.getPatient);
router.get('/patients', diagnocatController.getPatients);
router.post('/patients', diagnocatController.createPatient);
router.delete('/patients/:patientUID', diagnocatController.deletePatient);
router.post('/patients/:patientUID/shares', diagnocatController.createDoctorLink)

router.get('/patients/:uid/studies', diagnocatController.getPatientStudies);
router.post('/patients/:uid/createStudy', diagnocatController.createStudy);
router.delete('/studies/:studyUID', diagnocatController.deleteStudy);

router.get('/studies/:studyUID/images', diagnocatController.getStudyImages);
router.get('/studies/:studyUID/analyses', diagnocatController.getStudyAnalyses);

router.post('/studies/:studyUID/analyses', diagnocatController.requestAnalysis);
router.get('/analyses/:analysisUID', diagnocatController.getAnalysis);
router.delete('/analyses/:analysisUID', diagnocatController.deleteAnalysis);

router.post('/upload/open-session', uploadController.openSession);
router.post('/upload/request-upload-urls', uploadController.requestUploadUrls);
router.post('/upload/progress-notify', uploadController.uploadProgressNotify);
router.post('/upload/start-session-processing', uploadController.startSessionProcessing);
router.post('/upload/session-info', uploadController.checkSessionInfo);

router.get('/updateAllPatientsIds', diagnocatController.updateAllPatientsIds);

module.exports = router;
