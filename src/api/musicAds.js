const express = require("express");
const MusicAds = require("../model/musicAds");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    dealersID,
    services,
    bands,
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

  const newAd = new MusicAds({
    dealersID,
    services,
    bands,
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
    const musicAds = await MusicAds.findAll({ where: { dealersID } });
    res.status(200).json(musicAds);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
