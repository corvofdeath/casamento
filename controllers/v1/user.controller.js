import User from '../../models/user.model';

export default class UserController {

    constructor() {
    }

    async index(ctx) {

        try {
            let users = await User.find();
            return ctx.body = users;
        } catch (error) {
            console.error(error);
            return context.throw(400, error);
        }
    }
}