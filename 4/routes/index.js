const express = require('express');
const router = express.Router();
const controller = require('../controller/main');

router.get('/' , controller.health);
router.get('/hello' ,controller.hello);
router.get('/sum' , controller.sum);

module.exports = router;