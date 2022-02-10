const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");

module.exports = function (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "secret";
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      console.log(jwt_payload);
      User.findById( jwt_payload.data._id , function (err, user) {
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
    })
  );
};

// let opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     console.log(jwt_payload);
//     User.findOne({email: jwt_payload.email}, function(err, user) {
//         if (err) {
//             // error
//             return done(err, false);
//         }
//         if (user) {
//             // authenticate
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));
