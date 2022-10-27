const express = require('express');
const router = express.Router();
const User = require("../model/user");
const Dealers = require("../model/dealers");
const jwt = require("jsonwebtoken");

router.post("/",async (req,res) =>{

    const {username,password} = req.body;

    const userWithUsername = await User.findOne({ where: { username } }).catch(
        (err) => {
          console.log("Error: ", err);
        }
      );
    
    const dealerWithUsername = await Dealers.findOne({ where: { username } }).catch(
      (err) => {
        console.log("Error: ", err);
      });
    
    if(!userWithUsername && !dealerWithUsername){
        return res.status(400).json({message:"Username or Password does not match!"});
    }    

    if(userWithUsername){
      if(userWithUsername.password !== password){
        return res.status(400).json({message:"Username or Password does not match!"});
      }
      const jwtToken = jwt.sign({ id: userWithUsername.id,username:userWithUsername.username },process.env.JWT_SECRET);
      res.json({message:"Welcome back !", token:jwtToken, id: userWithUsername.id,username:userWithUsername.username,user:"client"});
    }
    if(dealerWithUsername){
      if(dealerWithUsername.password !== password){
        return res.status(400).json({message:"Username or Password does not match!"});
      }
      const jwtToken = jwt.sign({ id: dealerWithUsername.id,username:dealerWithUsername.username },process.env.JWT_SECRET);
      res.json({message:"Welcome back !", token:jwtToken, id: dealerWithUsername.id,username:dealerWithUsername.username,service:dealerWithUsername.services,user:"dealer"});
    }


});

module.exports = router;