const express = require("express");
const ClientsQuotation = require("../model/clientsQuotation");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    weddingdate,
    guestcount,
    weddingvenue,
    weddingcity,
    videochat,
    weddingdescription,
    dealerID,
    clientID,
  } = req.body;

  console.log(weddingdate);

  const newQuote = new ClientsQuotation({
    dealerID,
    clientID,
    firstname,
    lastname,
    email,
    weddingdate,
    guestcount,
    weddingvenue,
    weddingcity,
    videochat,
    weddingdescription,
  });
  const saveQuote = await newQuote.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add Ad" });
  });

  if (saveQuote) res.json({ message: "Ad Update" });
});
router.get("/dealer/:id", async (req, res) => {
  try {
    const destinationAds = await ClientsQuotation.findAll();
    res.status(200).json(destinationAds);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const dealersID = req.params.id;
    const destinationAds = await ClientsQuotation.findAll({
      where: { dealersID },
    });
    res.status(200).json(destinationAds);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
