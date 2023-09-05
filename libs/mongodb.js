import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connect to mongoDB succesfully')
    } catch (error) {
        console.log('Error onnect to mongoDB ')
    }
}

export default connectMongoDB;