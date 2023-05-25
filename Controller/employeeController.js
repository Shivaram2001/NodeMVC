const Employee=require("../Models/employeeModel");

const insertEmployee=async (req,res)=>{
    try{
        const empolyee=new Employee({
            name:req.body.name,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            password:req.body.password
        });
        const result = await Employee.insertMany([empolyee]);
        res.send("Registration sucessfull "+result);
    }
    catch(err)
    {
        res.send(err.message);
    }
}

module.exports=insertEmployee;