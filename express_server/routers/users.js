const express = require('express');
const userControllers = require('../controllers/users');
const router = express.Router();

router.post('/name', userControllers.inser_candidat);

router.get('/get', userControllers.get_detail);

module.exports = router



