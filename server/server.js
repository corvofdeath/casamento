import Koa from 'koa';
import bodyParser from 'koa-body'; 
import koaStatic from 'koa-static';
import koaSend from 'koa-send';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import winston from 'winston';
import 'winston-daily-rotate-file';
import koaWinston from 'koa-logger-winston';
import path from 'path';

import config from '../config/config';
import database from '../config/datasource';
import api from '../routes';
import auth from '../auth';

function initLogger() {

    const logger = new winston.Logger({
        transports: [
            new winston.transports.DailyRotateFile ({
                level: 'info',
                filename: '.log',
                dirname: path.join(__dirname, '../logs'),
                datePattern: 'yyyy-MM-dd',
                prepend: true,
                handleExceptions: true,
                json: false,
                colorize: false,
            }),
            new winston.transports.Console ({
                level: 'debug',
                handleExceptions: true,
                json: false,
                colorize: true
            })
        ],
        exitOnError: false
    });

    logger.stream = {
        write: function (message, encoding) {
            logger.info(message);
        }
    }

    return logger;
}

class Server {

    constructor() {
        this.app = new Koa();
        this.logger = initLogger();

        // log routes
        api.stack.forEach(route => console.log(route.path));

        // midlewares
        this.app.use(helmet());
        this.app.use(koaWinston(this.logger));
        this.app.use(morgan('combined', { stream: this.logger.stream }));
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