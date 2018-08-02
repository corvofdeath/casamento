'use strict'

import server from './server/server';

console.log("Koa-Exemple service is running");

async function init() {

    try {
        console.log("Starting server...")

        await server.start(process.env.PORT || "3000");

        console.log(`Server started successfully on port ${port}`);       
    } catch (error) {
        console.log(error);
    }
}

init();