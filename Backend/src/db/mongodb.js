import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

export const connentDB = async ()=>{

     try {

        const mongoConnect = await mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`);

        console.log("Your Database Successfully connected");

        
     } catch (error) {
        console.log("This is DATABASE Connection error : ",error)
     }

}





