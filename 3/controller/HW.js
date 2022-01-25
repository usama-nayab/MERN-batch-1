const utils = require('../utils/HW');

exports.basic_filter = (req , res) => {
    const result = utils.basic_filter();
    // res.status(200).json({
    //     result:result
    // });
    res.send(result);
}