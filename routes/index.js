import Router from 'koa-router';

import user from './v1/user.route'; 
import item from './v1/item.route'; 
import auth from './v1/auth.route';

// api routes
const routes = new Router({ prefix: '/api' });

// v1 routes
routes.use('/v1', user.routes(), user.allowedMethods());
routes.use('/v1', item.routes(), user.allowedMethods());
routes.use('/v1', auth.routes(), auth.allowedMethods());

export default routes;