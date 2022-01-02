const passport = require('passport');
const { verify } = require('jsonwebtoken');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const md5 = require('md5');
const { tbl_users } = require('../utils/database');

const passportConfig = () =>{

    //when authorizing request using username and password
    passport.use(new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'username'
    }, async (req, username, password, done) =>{
        try{
            //retrieve user by username and password (encrypted)
            const user = await tbl_users.findOne({where: {username : username, password: md5(password)}});

            if (!user){
                // if user doesn't exists request will fail
                done(null, false);
            }else{
                // return user data if user is valid
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

    //when authorizing request by token
    passport.use(new BearerStrategy(async (token, done) =>{
        try {
            //decode toekn to get user id and username
            const decoded = verify(token, process.env.TOKEN_SECRET || '');

            //retrieve user by username and user id
            const user = await tbl_users.findOne({where: {id : decoded.id, username: decoded.username}});

            //reject request if user doesn't exist
            if (!user){
                done(null, false);
            }else{
                //return user data if request is valid
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