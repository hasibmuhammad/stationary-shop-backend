import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB connected successfully!", conn.connection.host);
    } catch (error) {
        console.log("MongoDB connection failed!", error);
        process.exit(1);
    }
}

export default connectDB;