const express = require("express");
const Dealers = require("../model/dealers");
const User = require("../model/user");


const router = express.Router();

router.post("/", async (req, res) => {
  const {firstname,lastname,dob,gender,mobile, email,address,city,description,username,password,otp } = req.body.dealers;
  const services  = req.body.services;
  const districts  = req.body.districts;
  const profile  = req.body.profile;


  const alreadyExistsDealer = await Dealers.findOne({ where: { username } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  const alreadyExistsUser = await User.findOne({ where: { username } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (alreadyExistsDealer || alreadyExistsUser) {
    return res.status(409).json({ message: "Dealer with email already exists!" });
  }
  else{
    const newDealer = new Dealers({ firstname,lastname,dob,gender,mobile, email,address,city,services,districts,profile,description,username,password,otp });
    const savedDealer = await newDealer.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register dealer at the moment!" });
    });
  
    if (savedDealer) res.json({ message: "Thanks for registering" });
  }

});

module.exports = router;