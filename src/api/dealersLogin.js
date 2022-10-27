const express = require("express");
const DealersLogin = require("../model/dealersLogin");
const Dealers = require("../model/dealers");

const router = express.Router();

router.post("/", async (req, res) => {
    const username = req.body.username;
    const dealersID = parseInt(req.body.id);
    const services = req.body.service;
    
    const tempDealer = new DealersLogin({dealersID ,services, username});
    const saveTempDealer = await tempDealer.save().catch((err) => {
        console.log("Error: ", err);
        res.status(500).json({ error: "Cannot register dealer at the moment!" });
        });
    
        if (saveTempDealer) res.json({ message: "Updated" });

    
});

module.exports = router;