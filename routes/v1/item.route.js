import Router from 'koa-router';

import ItemController from '../../controllers/v1/item.controller';
import { isAuthenticated } from '../../auth';

const controller = new ItemController();
const router = new Router({ prefix: '/item' });

router
    .post('/', isAuthenticated(), async (ctx) => { await controller.create(ctx) })
    .get('/', async (ctx) => { await controller.get(ctx) })
    .put('/:id', isAuthenticated(), async (ctx) => { await controller.update(ctx) })
    .put('/gift/:id', async (ctx) => { await controller.gift(ctx) });

export default router;
