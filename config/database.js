const mongoose=require("mongoose");
require("dotenv").config();
const DbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{ console.log("DB Connected Successfully")})
    .catch((error)=>{
    console.log("DB Facing Connection Issues");
    console.log(error);
    process.exit(1);
     } )

}
module.exports= DbConnect;
