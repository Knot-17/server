const express = require('express');
const router = express.Router();
const db = require('../database');
const User = require("../model/user");




router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const users = await User.findAll({ where: { id } });
       res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
    }
});


module.exports = router;
