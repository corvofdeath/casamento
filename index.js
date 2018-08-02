'use strict'

import server from './server/server';

console.log("Casamento API service is running");

async function init() {

    try {
        console.log("Starting server...")
        const port = process.env.PORT || "3000";

        await server.start(port);

        console.log(`Server started successfully on port ${port}`);       
    } catch (error) {
        console.log(error);
    }
}

init();