import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const dbString = process.env.MONGO;
        console.log("Connecting to database", dbString);
        const db = await mongoose.connect(dbString);
        connection.isConnected = db.connections[0].readyState;
        
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}