const utils = require('../utils');

exports.sum = (req , res) =>{
    const data = utils.sum(1,2);
    res.status(200).json({
        data : data
    });
}

exports.health = (req , res) => {
    res.send("server is healthy from controller's main.js");
}

exports.hello = (req , res) =>{
    res.send("hello world from controller's main.js");
}

