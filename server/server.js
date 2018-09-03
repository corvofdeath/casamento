import Koa from 'koa';
import bodyParser from 'koa-body'; 
import koaStatic from 'koa-static';
import koaSend from 'koa-send';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import koaWinston from 'koa-logger-winston';
import path from 'path';

import Logger from '../utils/logger';
import config from '../config/config';
import database from '../config/datasource';
import api from '../routes';
import auth from '../auth';

class Server {

    constructor() {
        this.app = new Koa();
        this.logger = new Logger("ServerLogger");

        // log routes
        // api.stack.forEach(route => console.log(route.path));

        // midlewares
        this.app.use(helmet());
        this.app.use(koaWinston(this.logger.getLogger()));
        this.app.use(morgan('combined', { stream: this.logger.getLogger().stream }));
        this.app.use(bodyParser());
        this.app.use(auth());
        this.app.use(api.routes());
        this.app.use(koaStatic(path.join(__dirname, '../dist')));

        // this last middleware catches any request that isn't handled by koa-static or koa-router
        this.app.use(async (ctx) => {
            await koaSend(ctx, '/dist/index.html');
        });
    }

    async start(port) {

        await database.connect(config);
    
        await new Promise(resolve => this.app.listen(port, resolve));

        return this.app;
    }
}

export default new Server();