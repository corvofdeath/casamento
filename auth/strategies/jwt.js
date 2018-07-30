import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import User from '../../models/user.model';
import config from '../../config/config';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
};

export default new JWTStrategy(opts, async (jwtPayload, done) => {

    const user = await User.findById(jwtPayload.id);
    
    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
});