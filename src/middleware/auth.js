const passport = require("passport");

const checkAuth = passport.authenticate(['bearer'], {session: false});

module.exports = {
    checkAuth
}