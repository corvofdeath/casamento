'use strict'
import Logger from './utils/logger';
import server from './server/server';

const logger = new Logger("Index");

logger.info("Casamento API service is running");

async function init() {

    try {
        logger.info("Starting server...")
        const port = process.env.PORT || "3000";

        await server.start(port);

        logger.info(`Server started successfully on port ${port}`);       
    } catch (error) {
        logger.error(error);
    }
}

init();