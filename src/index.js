import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express()
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => { 
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed", err);  
  });

/*
import express from "express"
const app  = express() 

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log("ERRR : ", error);
        throw error
        
        
    })
     app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port : ${process.env.PORT}`);
        
    })
} catch (error) {
    console.log("ERROR :", error);
    throw err;
  }
})()
*/
