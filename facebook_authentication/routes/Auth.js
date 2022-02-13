const express = require("express");
const router = express.Router();
// const passport = require("passport");
const controllers = require("../controller/fb_user");


// redirect to facebook login page
router.get('/auth/facebook',  controllers.loginPage);
router.get('/auth/facebook/Demo',  controllers.redirectPage);
router.get('/success' , controllers.successPage);
router.get('/failure' , controllers.failurePage);


module.exports = router;
