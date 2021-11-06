const { AES, enc } = require('crypto-js');

module.exports.decrypt = phrase => AES.decrypt(phrase, process.env.ENCRYPTION_KEY).toString(enc.Utf8);