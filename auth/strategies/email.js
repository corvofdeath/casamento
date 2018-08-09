import { Strategy as CustomStrategy } from 'passport-custom';
import Account from '../../models/account.model';

export default new CustomStrategy(async (ctx, done) => {
    console.log('Email Strategy: ', ctx.body);

    try {
        const body = ctx.body;

        // Test whether is a login using email and password
        if (body.email && body.password) {
            const account = await Account.findOne({ email: ctx.body.email.toLowerCase() }).select("+password");

            if (!account) 
                done(null, false);

            const result = await Account.verifyPassword(body.password, account.password);

            if (!result)
                done(null, false);

            done(null, account);

        } else {
            done(null, false);
        }

    } catch (error) {
        console.error(error);
        done(error);
    }
});