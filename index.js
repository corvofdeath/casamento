'use strict'

import server from './server/server';

console.log("Koa-Exemple service is running");

async function init() {

    try {
        console.log("Starting server...")
        const port = "3000";

        await server.start(port || "3000");

        console.log(`Server started successfully on port ${port}`);       
    } catch (error) {
        console.log(error);
    }
}

init();