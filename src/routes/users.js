const express = require('express');
const { getUsers } = require('../controllers/users-controller');
const router = express.Router();

const url = '/';

router.get(url,  getUsers);


module.exports = router;