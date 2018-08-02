import mongoose from 'mongoose';

export default {

    connect: async (config) => {

        try {

            let database = process.env.NODE_ENV === "dev" ? config.database.dev : config.database.prod;

            console.log("[DATASOURCE]: Try to connect with: ", database);
            await mongoose.connect(database, { useNewUrlParser: true }); 
            console.log("[DATASOURCE]: Connection succefull");

            return mongoose;

        } catch (error) {
            console.error("[DATASOURCE]: FATAL ERROR - ", error);
        }
    }
}