import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import gameRoute from './route/Game.route.js';
import cors from "cors";
import userRoute from "../Backend/route/User.route.js";
const app = express()

app.use(cors());
app.use(express.json());
dotenv.config();
const port=process.env.PORT || 4000;
const URI =process.env.MongoDBURI;
//connect to mongo db
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to mongoDB")
} catch (error) {
    console.log("Error:",error)
}
//defining routes
app.use("/games",gameRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})