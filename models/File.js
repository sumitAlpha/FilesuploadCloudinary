// const mongoose= require("mongoose");
// const nodemailer = require("nodemailer");
// // require("dotenv").config();
// const { PassThrough } = require("nodemailer/lib/xoauth2");
//  const fileSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     imageUrl:{
//         type:String,
//         required:true,
//     },
//     tags:{
//         type:String,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true
//     }
//  });

//   //post Middleware
//   fileSchema.post("save", async function(doc){
//     try{
//       console.log("Doc-->" ,doc);
//       let transporter = nodemailer.createTransport({
//         host:process.env.MAIL_HOST,
//         auth:{
//             user:process.env.MAIL_USER,
//             Pass:process.env.MAIL_PASS,
//         },
//       });

//       //Send Mail
//       let info = await  transporter.sendMail({
//         to: `sumit singh- Check Mail`,
//         from: doc.email,
//         subject:"Image Uploaded Successfully",
//         html:`<h2>Hello this is Check Mail</h2>
//         <P>File Uploaded Successfully View here <a href:" ${doc.imageUrl}"></a></P>`
//       });
//       console.log("INFO",info);
//     }
//     catch(error){
//      console.error(error);
//     }
//   });


//   const File = mongoose.model("File",fileSchema)
//   module.exports= File;


const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});


//post middleware
fileSchema.post("save", async function(doc) {
    try{
        console.log("DOC",doc)

        //transporter 
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        //send mail 
        let info = await transporter.sendMail({
            from:`sumit Developer - by sumit`,
            to: doc.email,
            subject: "New File Uploaded on Cloudinary",
            html:`<h2>Hello Jee</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a> </p>`,
        })
        
        console.log("INFO", info);


    }
    catch(error) {
        console.error(error);
    }
})


const File = mongoose.model("File", fileSchema);
module.exports = File;