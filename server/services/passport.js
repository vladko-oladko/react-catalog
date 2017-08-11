import passport from 'passport';
import User from '../models/user';
import { dbConfig } from '../config';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as CustomStrategy } from 'passport-custom';

const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }

        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err); }
            if (!isMatch) { return done(null, false); }
            return done(null, user);
        });
    });
});


const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: dbConfig.secret,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err) { return done(err, false); }
        console.log('USER: ', user);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

const permissionRole = new CustomStrategy((req, done) => {
    if (req.user.role === 1) {
        done(null, {});
    } else {
        done(null, false);
    }
});

passport.use(jwtLogin);
passport.use(localLogin);
passport.use('permission', permissionRole);
