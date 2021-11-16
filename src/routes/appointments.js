const express = require('express');
const { getAppointment, getAppointments } = require('../controllers/appointments-controller');
const { getPatients } = require('../controllers/patientsController');
const { checkAuth } = require('../middleware/auth');
const router = express.Router();

const url = '';

router.get(url, getAppointments);
router.get(`${url}/:id`,  getAppointment);


module.exports = router;