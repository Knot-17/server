const express = require("express");
const router = express.Router();
const db = require("../database");
const Dealers = require("../model/dealers");
const DealersLogin = require("../model/dealersLogin");

router.get("/", async (req, res) => {
  try {
    const dealers = await Dealers.findAll();
    res.status(200).json(dealers);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dealers = await DealersLogin.findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(dealers);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const count = await Dealers.destroy({
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
    const user = await Dealers.findByPk(req.params.id);

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
