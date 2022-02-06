const express = require('express');
const router = express.Router();
const controllers = require('../controller/Chat');

// making routes
router.post('/add' , controllers.add);
router.get('/' , controllers.get);
router.delete('/' , controllers.del);
router.put('/' , controllers.updateList);
router.patch('/' , controllers.update)

module.exports = router;