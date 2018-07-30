import Router from 'koa-router';

import UserController from '../../controllers/v1/user.controller';
import { isAuthenticated } from '../../auth';

const controller = new UserController();
const router = new Router({ prefix: '/user' });

router
    .get('/', isAuthenticated(), async (ctx) => { await controller.index(ctx) });

export default router;
