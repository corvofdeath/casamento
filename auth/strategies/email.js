import { Strategy as CustomStrategy } from 'passport-custom';
import User from '../../models/user.model';

export default new CustomStrategy(async (ctx, done) => {
    console.log('Email Strategy: ', ctx.body);

    try {
        const body = ctx.body;

        // Test whether is a login using email and password
        if (body.email && body.password) {
            const user = await User.findOne({ email: ctx.body.email.toLowerCase() }).select("+password");

            if (!user) 
                done(null, false);

            const result = await user.verifyPassword(body.password, user.password);

            if (!result)
                done(null, false);

            done(null, user);

        } else {
            done(null, false);
        }

    } catch (error) {
        console.error(error);
        done(error);
    }
});