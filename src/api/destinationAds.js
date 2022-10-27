const express = require("express");
const DestinationAds = require("../model/destinationAds");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    dealersID,
    services,
    destinations,
    category,
    websiteurl,
    location,
    street,
    district,
    instagram,
    facebook,
    maxGuest,
    amount,
  } = req.body;

  const newAd = new DestinationAds({
    dealersID,
    services,
    destinations,
    category,
    websiteurl,
    location,
    street,
    district,
    instagram,
    facebook,
    maxGuest,
    amount,
  });
  const savedAd = await newAd.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add Ad" });
  });

  if (savedAd) res.json({ message: "Ad Update" });
});

router.get("/:id", async (req, res) => {
  try {
    const dealersID = req.params.id;
    const destinationAds = await DestinationAds.findAll({
      where: { dealersID },
    });
    res.status(200).json(destinationAds);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedAd = await DestinationAds.destroy({
      where: { id },
    });
    res.status(200).json(deletedAd);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
