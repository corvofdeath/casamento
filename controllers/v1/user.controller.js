import User from '../../models/user.model';

import Logger from '../../utils/logger';

export default class UserController {

    constructor() {
        this.logger = new Logger("UserController");
    }

    async index(ctx) {

        try {
            let users = await User.find();
            return ctx.body = users;
        } catch (error) {
            this.logger.error(error);
            return context.throw(400, error);
        }
    }
}