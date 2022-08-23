const express = require('express');
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/login",async (req,res) =>{

    const {email,password} = req.body;

    const userWithEmail = await User.findOne({ where: { email } }).catch(
        (err) => {
          console.log("Error: ", err);
        }
      );
    if(!userWithEmail){
        return res.status(400).json({message:"Email or Password does not match!"});
    }    

    if(userWithEmail.password !== password){
        return res.status(400).json({message:"Email or Password does not match!"});
    }

    const jwtToken = jwt.sign({ id: userWithEmail.id,email:userWithEmail.email },process.env.JWT_SECRET);

    res.json({message:"Welcome back !", token:jwtToken});

});

module.exports = router;