import mongoose from 'mongoose';

export default {

    connect: async (config) => {

        try {

            console.log("[DATASOURCE]: Try to connect with: ", config.database);
            await mongoose.connect(config.database, { useNewUrlParser: true }); 
            console.log("[DATASOURCE]: Connection succefull");

            return mongoose;

        } catch (error) {
            console.error("[DATASOURCE]: FATAL ERROR - ", error);
        }
    }
}