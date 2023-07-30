import mongoose from "mongoose";
import enviroments from "../config/enviroments.js";

const conx = async () => {
   try {
       const host = enviroments.HOST;
       await mongoose.connect(`mongodb://${host}/taskUser`);
       console.log(">> DB connect!")
   }catch (err) {
      console.log(err)
   }

}

export default conx