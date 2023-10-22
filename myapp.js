const mongoose=require("mongoose");
const env=require('dotenv').config();

// const env=requir("env");
const conn=mongoose.createConnection(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true });

conn.on("connected",()=>{
    console.log("MongoDB is connected");
    
})