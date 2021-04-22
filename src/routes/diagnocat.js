const diagnocatController = require('../controllers/diagnocatController');

const express = require('express');
const router = express.Router();

router.get('/patients', diagnocatController.getPatients);
router.post('/patients', diagnocatController.createPatient);

router.get('/patients/:uid/studies', diagnocatController.getPatientStudies);
router.get('/studies/:studyUID/images', diagnocatController.getStudyImages);
router.get('/studies/:studyUID/analyses', diagnocatController.getStudyAnalyses);

module.exports = router;
