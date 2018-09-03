import User from '../../models/user.model';

import Logger from '../../utils/logger';

export default class AuthController {

    constructor() {
        this.logger = new Logger("AuhtController");
    }

    async register(ctx, next) {

        try {
            const { name, email, password } = ctx.request.body;

            if (!name || !email || !password) {
                this.logger.error("[Register] - Invalid payload");
                return ctx.throw(400, { status: 'error', message: 'Invalid payload' });
            }

            let user = await User.findOne({ email });

            if (user) {
                this.logger.error(`[Register] - E-mail: ${ email } already registered`);
                return ctx.throw(400, { status: 'error', message: 'E-mail already registered' });
            }

            user = new User({ name, email, password });
            await user.save();

            this.logger.info(`[Register] - New user ${ email }`);

            ctx.state = {
                user: user._id,
            };

            await next();
            
        } catch (error) {
            this.logger.error(error);
            return ctx.throw(400, error);
        }
    }
}