const express = require("express");
const router = express.Router();
const db = require("../database");
const User = require("../model/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await User.destroy({
      where: { id: req.params.id },
      cascade: true,
    });
    res.status(200).json({ count: count });
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }

    const updatedUser = await user.set(req.body);

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
