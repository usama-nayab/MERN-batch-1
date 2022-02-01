const express = require('express');
const router = express.Router();
const controllers = require('../controller/Todo');

// making routes
router.post('/' , controllers.add);
router.get('/' , controllers.get);
router.delete('/' , controllers.del);
router.patch('/' , controllers.update);
router.put('/' , controllers.updateList);

module.exports = router;