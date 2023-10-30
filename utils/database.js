import mongoose from "mongoose";
import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";

let isConnected =  false;

export const connectToDB = async () => {
    console.log("3")
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log('mongo is connected');
        return;
    }

    try {
        console.log("4")
         await mongoose.connect("mongodb+srv://sam:sam@cluster0.v1przmc.mongodb.net/?retryWrites=true&w=majority",{
            dbName:"share_prompt",
            useNewUrlParser: true,
            // useUnifiedTopology:TEMPORARY_REDIRECT_STATUS
         })

         isConnected =  true;
         console.log('mongodb connected');
    }catch(err){
         console.log(err);
    }
}