import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import Account from '../../models/account.model';
import config from '../../config/config';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
};

export default new JWTStrategy(opts, async (jwtPayload, done) => {

    const account = await Account.findById(jwtPayload.id);
    
    if (account) {
        done(null, account);
    } else {
        done(null, false);
    }
});