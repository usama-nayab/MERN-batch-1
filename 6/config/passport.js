const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({email: jwt_payload.email}, function(err, user) {
        if (err) {
            // error
            return done(err, false);
        }
        if (user) {
            // authenticate
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));