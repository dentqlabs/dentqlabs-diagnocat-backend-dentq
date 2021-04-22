const diagnocatController = require('../controllers/diagnocatController');
const uploadController = require('../controllers/uploadController');

const express = require('express');
const router = express.Router();

router.get('/patients', diagnocatController.getPatients);
router.post('/patients', diagnocatController.createPatient);

router.get('/patients/:uid/studies', diagnocatController.getPatientStudies);
router.get('/studies/:studyUID/images', diagnocatController.getStudyImages);
router.get('/studies/:studyUID/analyses', diagnocatController.getStudyAnalyses);


router.post('/upload/open-session', uploadController.openSession);
router.post('/upload/request-upload-urls', uploadController.requestUploadUrls);

module.exports = router;
