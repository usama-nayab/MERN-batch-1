const express = require('express');
const router = express.Router();
const controller = require('../controller/HW');

router.get('/names' , controller.basic_filter);

module.exports = router;