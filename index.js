'use strict'

import server from './server/server';

console.log("Casamento API service is running");

async function init() {

    try {
        console.log("Starting server...")
        const port = process.env.PORT;

        await server.start(port || "3000");

        console.log(`Server started successfully on port ${port}`);       
    } catch (error) {
        console.log(error);
    }
}

init();