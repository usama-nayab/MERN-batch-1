const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../models/fb_user.js");

// facebook strategy
passport.serializeUser(function(user, done) {  // to store the user in the session
  done(null, user);
});

passport.deserializeUser(function(user, done) { // to retrieve the user from the session
  done(null, user);
});

module.exports = function(passport) {  
passport.use(new FacebookStrategy({
  clientID: "492826632195343",
  clientSecret: "9cff129288ebb1a2ee7f4c055d111613",
  callbackURL: "http://localhost:3000/auth/facebook/Demo",  
  profileFields: ['id', 'displayName', 'email'] 
},
function(accessToken, refreshToken, profile, cb) {
  User.findOne({'facebookId' : profile.id}, function(err, user) {
    if(err) {
      return cb(err);
    }
    if(user) {
      return cb(null, user);
    }
    else {
      var newUser = new User();
      newUser.facebookId = profile.id;
      newUser.name = profile.displayName;
      // newUser.email = profile.emails[0].value || null;
      newUser.save(function(err, user) { 
        if(err) {
          return cb(err);
        }
        return cb(null, user);
      });
    }
  });
}
));}