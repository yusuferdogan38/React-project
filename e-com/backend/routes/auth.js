const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt=require("bcrypt")



//(Create-new Register)
router.post("/register", async(req,res)=>{

    try {
        const  {username,password,email}=req.body
         const hashedPassword=await bcrypt.hash(password,10);
         const exitingUser=await User.findOne({email});
         if(exitingUser){
            return res.status(400).json({error: "Email address is already registered"})
         }

       const newUser=  await new User(
            {
                username,
                email,
                password:hashedPassword},
        )
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error);
    res.status(500).json({ error: "Server error." });
    }
})


//Login
router.post("/login" , async(req,res)=>{

    try {
        const {email,password}=req.body

        const user =await User.findOne({email})
        if(!user){
            return res.status(401).json({error: "invalid email "})
        }
        const isPasswordValid =await bcrypt.compare(password,user.password)
        if(isPasswordValid){
            return res.status(401).json({error: "invalid  password"})
        }
        

        res.status(201).json({
            id:user.user_id,
            username:user.username,
            email:user.email,
            role:user.role


        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }

})


module.exports=router