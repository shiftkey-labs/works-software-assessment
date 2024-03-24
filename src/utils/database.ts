import mongoose from "mongoose";
import config from "../config";
const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI);
    } catch (error) {
        console.log('Error connecting to database', error);
        throw error;
    }
}

export { connectToDatabase };
