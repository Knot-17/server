const express = require("express");
const DestinationAds = require("../model/destinationAds");
const { Op } = require("sequelize");

const router = express.Router();

router.get("/:district", async (req, res) => {
  try {
    const district = req.params.district;
    const destinationAds = await DestinationAds.findAll({
      where: {
        district,
      },
    });
    res.status(200).json(destinationAds);
  } catch (err) {
    console.error(err.message);
  }
});
module.exports = router;
