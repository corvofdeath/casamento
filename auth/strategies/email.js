import { Strategy as CustomStrategy } from 'passport-custom';
import Account from '../../models/account.model';
import Logger from '../../utils/logger';

const logger = new Logger("Auth/EmailStrategy");

export default new CustomStrategy(async (ctx, done) => {
    logger.info(`Body: ${ ctx.body }`);

    try {
        const body = ctx.body;

        // Test whether is a login using email and password
        if (body.email && body.password) {
            const account = await Account.findOne({ email: ctx.body.email.toLowerCase() }).select("+password");

            if (!account) {
                logger.error(`User not found for email: ${ body.email }`);
                done(null, false);
            }

            const result = await Account.verifyPassword(body.password, account.password);

            if (!result) {
                logger.error(`Invalid password for ${ body.email }`);
                done(null, false);
            }

            done(null, account);

        } else {
            logger.error("Invalid payload");
            done(null, false);
        }

    } catch (error) {
        console.error(error);
        done(error);
    }
});