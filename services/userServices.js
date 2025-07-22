const bcrypt=require('bcryptjs');
const User = require('../models/userModel');

exports.login = async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
       return  res.status(404).json({message:"usernotfound"});
    }
    const decryptPassword= await bcrypt.compare(password,user.password);
    if(!decryptPassword){
        return res.status(401).json({message:"Password incorrect!"});
    }
    const {password:dbpassword,...rest}=user._doc;
    return res.status(200).json({message:"Success login!"});
}

exports.register= async(req,res)=>{
    const {name, email,password } = req.body;
 const hashedPassword=await bcrypt.hash(password,10);
 const newUser=await User.insertOne({name,email,password:hashedPassword});
res.status(201).json(newUser);

}