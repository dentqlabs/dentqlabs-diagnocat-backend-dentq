const { sign } = require('jsonwebtoken');

/*
    generates token for authenticated user
*/
const login = async function(req, res) {
    return res.json({
        token: makeToken(req.user),
        expiresIn: process.env['TOKEN_TTL'],
        user: req.user,
    });
}

/*
    generates token for authenticated user
*/
const makeToken = user => sign({ id: user.id, username: user.username }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_TTL });
    
module.exports = {
    login
}