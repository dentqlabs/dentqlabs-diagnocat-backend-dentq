const passport = require("passport");

// middleware: when applied, check if the request is authorized. will return 403 otherwise
const checkAuth = passport.authenticate(['bearer'], {session: false});

module.exports = {
    checkAuth
}