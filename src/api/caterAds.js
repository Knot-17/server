const express = require("express");
const CaterAds = require("../model/caterAds");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    dealersID,
    services,
    caterings,
    description,
    websiteurl,
    location,
    street,
    district,
    instagram,
    facebook,
   
    amount,
    image1,
    image2,
  } = req.body;

  const newAd = new CaterAds({
    dealersID,
    services,
    caterings,
    description,
    websiteurl,
    location,
    street,
    district,
    instagram,
    facebook,
    
    amount,
    image1,
    image2,
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
    const caterAds = await CaterAds.findAll({ where: { dealersID } });
    res.status(200).json(caterAds);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
