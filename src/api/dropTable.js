const express = require("express");
const DealersLogin = require("../model/dealersLogin");

const router = express.Router();

router.delete("/", async (req, res) => {
    
    await DealersLogin.destroy({
        where:{},
        truncate: true
    });
    console.log("User table dropped!");

    
});

module.exports = router;