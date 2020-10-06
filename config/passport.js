// we will need to use Passport to authenticate our token and construct private routes.

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');


const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id) 
            .then(user => { //USER is an ID!! 
                if (user) {
                    return done(null, user); //USER is an ID!! 
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};

