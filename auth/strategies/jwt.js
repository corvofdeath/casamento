import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import Account from '../../models/account.model';
import config from '../../config/config';
import Logger from '../../utils/logger';

const logger = new Logger("Auth/JwtStrategy");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.secret,
};

export default new JWTStrategy(opts, async (jwtPayload, done) => {

    const account = await Account.findById(jwtPayload.id);
    
    if (account) {
        done(null, account);
    } else {
        logger.error("Invalid token");
        done(null, false);
    }
});