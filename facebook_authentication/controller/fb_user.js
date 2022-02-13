const passport = require('passport');

exports.loginPage = passport.authenticate('facebook');

exports.redirectPage = passport.authenticate('facebook' , {
    successRedirect: '/success',
    failureRedirect: '/failure'
});

exports.successPage = (req, res) => {
    return res.send('login successfull');
}

exports.failurePage = (req, res) => {
    return res.send('login failed');
}

