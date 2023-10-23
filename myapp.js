const mongoose=require("mongoose");
const env=require('dotenv').config();

const conn=mongoose.createConnection(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

conn.on("connected",()=>{
    console.log("MongoDB is connected");
    
})