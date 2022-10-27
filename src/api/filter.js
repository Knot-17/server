const express = require("express");
const Filter = require("../model/filter");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    firstname,
    lastname,
    partnerFirstName,
    partnerLastName,
    date,
    place,
    location,
    season,
    year,
    budget,
    guestcount,
  } = req.body.filters;
  const ClientID = req.body.ClientID;

  const newFilter = new Filter({
    ClientID,
    firstname,
    lastname,
    partnerFirstName,
    partnerLastName,
    date,
    place,
    location,
    season,
    year,
    budget,
    guestcount,
  });
  const savedFilter = await newFilter.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot add Filter" });
  });

  if (savedFilter) res.json({ message: "Filter Updated" });
});

router.get("/:id", async (req, res) => {
  try {
    const ClientID = req.params.id;
    const filter = await Filter.findAll({ where: { ClientID } });
    res.status(200).json(filter);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
