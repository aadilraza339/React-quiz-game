const express = require('express');
const userControllers = require('../controllers/users');
const router = express.Router();

router.post('/name', userControllers.inser_candidat);

router.get('/get', userControllers.get_detail);

// router.get('/Score', userControllers.get_score);


module.exports = router



