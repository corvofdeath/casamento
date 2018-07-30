import AuthController from '../../controllers/v1/auth.controller';
import Router from 'koa-router';
import { authEmail, generateToken } from '../../auth';

const controller = new AuthController();
const router = new Router({ prefix: '/auth' });

router
    .post('/register', async (ctx, next) => { await controller.register(ctx, next) }, generateToken())
    .post('/login', authEmail(), generateToken());

export default router;
