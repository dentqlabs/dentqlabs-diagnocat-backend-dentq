const passport = require('passport');
const { verify } = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const md5 = require('md5');
const { tbl_users } = require('../utils/database');

const passportConfig = () =>{
    passport.use(new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'username'
    }, async (req, username, password, done) =>{
        try{
            const user = await tbl_users.findOne({where: {username : username, password: md5(password)}});

            if (!user){
                done(null, false);
            }else{
                
                done(null, {
                    id: user.id,
                    username: user.username,
                    fullName: user.full_name,
                    email: user.email,
                    roleId: user.role_id,
                    branchId: user.branch_id

                });
            }
        } catch (error){
            console.log(`Login error`, error);
            done(null, false);        }
        
    }));

    passport.use(new BearerStrategy(async (token, done) =>{
        try {
            const decoded = verify(token, process.env.TOKEN_SECRET || '');
            const user = await tbl_users.findOne({where: {id : decoded.id, username: decoded.username}});
           
            if (!user){
                done(null, false);
            }else{
                done(null, {
                    id: user.id,
                    username: user.username,
                    fullName: user.full_name,
                    email: user.email,
                    roleId: user.role_id,
                    branchId: user.branch_id
                });
            }
        } catch (e) {
            done(null, false);
        }
    }));
}


module.exports = {
    passportConfig
};