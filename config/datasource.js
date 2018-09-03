import mongoose from 'mongoose';
import Logger from '../utils/logger';

export default {

    connect: async (config) => {

        const logger = new Logger("DataSource")

        try {

            let database = process.env.NODE_ENV === "dev" ? config.database.dev : config.database.prod;

            logger.info("Try to connect with: " + database);
            await mongoose.connect(database, { useNewUrlParser: true }); 
            logger.info("Connection succefull");

            return mongoose;

        } catch (error) {
            logger.error(error);
        }
    }
}