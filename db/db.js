const mongoose=require("mongoose");

module.exports=mongoose.connect("mongodb://localhost:27017/mvcProject").then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log(err)
});