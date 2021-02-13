const zerodha = require('../models/zerodha')
const mongoose = require('mongoose');
exports.getCompany = (req, res, next) => {
    
    res.status(200).json({
    success : true, msg : `Zerodha ${req.params.id}`,
    data:  zerodha.find({}, (err, data) => console.log(data))
});
}
