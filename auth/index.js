import passport from 'koa-passport';
import compose from 'koa-compose';
import jwt from 'jsonwebtoken';
import Account from '../models/account.model';
import config from '../config/config';
import Logger from '../utils/logger';

// Strategies
import jwtStrategy from './strategies/jwt';
import emailStrategy from './strategies/email';

const logger = new Logger("Auth");

passport.use('jwt', jwtStrategy);
passport.use('email', emailStrategy);

passport.serializeUser((account, done) => {
    logger.info(`Serializing account: ${ account._id }`);
    done(null, account._id);
});

passport.deserializeUser((id, done) => {
    (async () => {
        try {
            logger.info(`Deserializing account: ${ account._id }`);
            const account = await Account.findById(id);
            done(null, account);
        } catch (error) {
            done(error);
        }
    })();
});

export default function auth() {
    return compose([
        passport.initialize(),
    ]);
}

export function isAuthenticated() {
    return passport.authenticate('jwt');
}

export function authEmail() {
    return passport.authenticate('email');
}

// After autentication using one of the strategies, generate a JWT token
export function generateToken() {
    return async ctx => {

        const { account } = ctx.state;
        
        if (account === false) {
            ctx.status = 401;
        } else {
            const jwtToken = jwt.sign({ id: account }, config.jwt.secret);
            const token = `Bearer ${jwtToken}`;

            logger.info(`Create token for: ${ account }`);

            // TODO: Get client or user object
            const currentaccount = await Account.findOne({ _id: account });

            ctx.status = 200;
            ctx.body = {
                token,
                account: currentaccount,
            };
        }
    };
}