const express = require('express');
const router = express.Router();
const controllers = require('../controller/Todo');

// making routes
router.post('/add' , controllers.add);
router.get('/read' , controllers.get);
router.delete('/' , controllers.del);
router.put('/' , controllers.updateList);
router.patch('/' , controllers.update)

module.exports = router;