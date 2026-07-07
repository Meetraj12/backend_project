import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env"
})

const connectedDB = async () => {
    try{
        const connectionInsatance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log("Database Connected");

    }
    catch(err){
        console.log("Connection Error: ", err);
        process.exit(1);
    }

}

export default connectedDB;