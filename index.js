 const express= require('express');

 const app = express();

 require("dotenv").config();
 const PORT= process.env.PORT || 3000 ;
 //middleware
 app.use(express.json());

 //fileupload Middleware
 const fileUpload = require("express-fileupload");
 app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
 }));

 //db connection
 const DbConnect = require("./config/database");
 DbConnect();

  //cloudinary connection
 const cloudinary = require("./config/cloudinary");
 cloudinary.uploadFilesToCloudinary();

  //api routes IMPORT
  const upload =require("./routes/FileUpload");
  //mounting
 app.use("/api/v1/upload",upload);

 //App listen
 app.listen(PORT,()=>{
    console.log(`App is Starting At Port Number: ${PORT}`);
 });

//Default Api Route
app.get((req,res)=>{
    res.send("KAISE HAI DOSTO")
});

  
 