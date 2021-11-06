const { decrypt } = require('../utils/security.js');

module.exports.decryptPassword = (req, res, next) => {
    if (req.body.password){ req.body.password = decrypt(req.body.password);}
    next();
}