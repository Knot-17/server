const express = require("express");
const Payment = require("../model/payment");

const router = express.Router();

router.post("/", async (req, res) => {
  const { dealersID, clientsID, firstname, amount } = req.body;

  const newAd = new Payment({
    dealersID,
    clientsID,
    firstname,
    amount,
  });
  const savedAd = await newAd.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add Payment" });
  });

  if (savedAd) res.json({ message: "Payment update" });
});

router.get("/:id", async (req, res) => {
  try {
    const dealersID = req.params.id;
    const payment = await Payment.findAll({
      where: { dealersID },
    });
    res.status(200).json(payment);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
