const express = require('express');
const { getPatients, createPatient } = require('../controllers/patientsController');
const { checkAuth } = require('../middleware/auth');
const router = express.Router();

const url = '/';

router.get(url,  getPatients);
router.post(url, createPatient);


module.exports = router;