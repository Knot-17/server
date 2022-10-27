const express = require("express");
const User = require("../model/user");
const Dealers = require("../model/dealers");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const { firstname,lastname,dob,gender,mobile, email,address,city,username, password,otp } = req.body;

  console.log(req.body);

  const alreadyExistsUser = await User.findOne({ where: { username } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  const alreadyExistsDealer = await Dealers.findOne({ where: { username } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );


  if (alreadyExistsUser || alreadyExistsDealer) {
    return res.status(409).json({ message: "User with email already exists!" });
  }
  else{
    const newUser = new User({ firstname,lastname,dob,gender,mobile, email,address,city,username, password,otp });
    const savedUser = await newUser.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });
  
    if (savedUser) res.json({ message: "Thanks for registering" });
  }


});

module.exports = router;