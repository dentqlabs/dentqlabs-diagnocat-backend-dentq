const { decrypt } = require('../utils/security.js');

//  middleware: all request containing encrypted password will be decrypted when applied
module.exports.decryptPassword = (req, res, next) => {
    if (req.body.password){ req.body.password = decrypt(req.body.password);}
    next();
}