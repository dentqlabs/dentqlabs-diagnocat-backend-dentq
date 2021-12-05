const express = require('express');
const { getAppointment, getAppointments, saveAppointmentDiagnocatLink, updateAppointment } = require('../controllers/appointments-controller');
const router = express.Router();
const url = '';
router.get(url, getAppointments);
router.get(`${url}/:id`,  getAppointment);
router.post(`${url}/savelink`, saveAppointmentDiagnocatLink)
router.put(`${url}/:id`, updateAppointment);
module.exports = router;