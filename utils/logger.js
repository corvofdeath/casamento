import winston from 'winston';
import 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';

const loggerPath = "./logs";

async function initFolder() {

    let result = fs.existsSync(loggerPath);

    if (!result)
        fs.mkdirSync(loggerPath);
}

function initLogger() {

    initFolder();

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

// Start Logger Functions
const logger = initLogger()

// Export
export default class Logger {

    constructor (name) {
        this.name = `${name} -`;
        this.logger = logger;
    }

    getLogger() {
        return this.logger;
    }

    log(level, msg) {
        this.logger.log(level, this.name, msg);
    }

    debug(msg) {
        this.logger.info(this.name, msg);
    }

    info(msg) {
        this.logger.info(this.name, msg);
    }

    warn(msg) {
        this.logger.warn(this.name, msg);
    }

    error(msg) {
        this.logger.error(this.name, msg);
    }
}