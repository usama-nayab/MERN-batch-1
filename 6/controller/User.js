const User = require('../models/User');
const jwt = require('jsonwebtoken');

// SIGNUP
exports.signup = function(req , res) {
    const body = req.body;
    const user = new User(body);
    user.save();
    return res.status(200).json({
        success:true,
        message:"user created successfully"
    });
}

// LOGIN
exports.login = function(req , res) {
    const body = req.body;
    User.findOne({email:body.email} , (err , user) => {
        if(err) {
            return res.status(500).json({
                success:false,
                message:"Login Error"
            });
        }
        if(user) {
            jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: user
              }, 'secret' , (err , token) => {
                  if(err){
                      console.log("error in generating token");
                  }
                    else {
                        return res.status(200).json({
                            success:true,
                            data:[ {user:user} , {token:token}],
                            message:"Login Successful"
                        });
                    }
              });
        } 
    });
}
