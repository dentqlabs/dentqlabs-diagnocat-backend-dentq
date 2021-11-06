const { sign } = require('jsonwebtoken');

const login = async function(req, res) {
    return res.json({
        token: makeToken(req.user),
        expiresIn: process.env['TOKEN_TTL'],
        user: req.user,
    });
}

const makeToken = user => sign({ id: user.id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_TTL });
    
module.exports = {
    login
}