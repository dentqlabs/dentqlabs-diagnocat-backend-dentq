const express = require('express');
const { getPatients } = require('../controllers/patientsController');
const { checkAuth } = require('../middleware/auth');
const router = express.Router();

const url = '/';

router.get(url,  getPatients);


module.exports = router;