import User from '../../models/user.model';

export default class AuthController {

    constructor() {
    }

    async register(ctx, next) {

        try {
            const { name, email, password } = ctx.request.body;

            if (!name || !email || !password)
                return ctx.throw(400, { status: 'error', message: 'Invalid payload' });

            let user = await User.findOne({ email });

            if (user)
                return ctx.throw(400, { status: 'error', message: 'E-mail already registered' })

            user = new User({ name, email, password });
            await user.save();

            ctx.state = {
                user: user._id,
            };

            await next();
            
        } catch (error) {
            console.error(error);
            return ctx.throw(400, error);
        }
    }
}