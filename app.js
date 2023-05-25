const express=require("express");
const app=express();
const bodyParser = require("body-parser");


const db=require("./db/db");
// const Employee=require("./Models/employeeModel");
const employeeController=require("./Controller/employeeController");


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())



app.get("/register",(req,res)=>{

});

app.post("/register",employeeController);

app.listen(3000,()=>{
    console.log("Listening..... ")
})

// -------------------------------------------

// async function getData()
// {
//     const data=await Employee.find();
//     console.log(data);
// }

// getData();

// async function postData()
// {
//     let data={
//         name:"Shivarama",
//         email:"shiva@gmail.com",
//         mobileNumber:4783883883,
//         password:"password123"
//     }
//     const result=await Employee.insertMany([data]);
//     console.log(result);
// }

// postData();