const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const middlewares = require("./middlewares");
const register = require("./api/register");
const signin = require("./api/signin");
const getUser = require("./api/getUser");
const getaUser = require("./api/getaUser");
const getDealer = require("./api/getDealer");
const filter = require("./api/filter");
const regDealer = require("./api/registerDealer");
const dealersTempLogin = require("./api/dealersLogin");
const deleteAllrows = require("./api/dropTable");
const destinationAds = require("./api/destinationAds");
const destinationFilter = require("./api/destinationFilter");
const clientQuotations = require("./api/clientQuotation");
const payment = require("./api/payment");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1/register", register);
app.use("/api/v1/signin", signin);
app.use("/api/v1/getUser", getUser);
app.use("/api/v1/getaUser", getaUser);
app.use("/api/v1/getDealer", getDealer);
app.use("/api/v1/filter", filter);
app.use("/api/v1/registerDealer", regDealer);
app.use("/api/v1/dealersLogin", dealersTempLogin);
app.use("/api/v1/deleteAllrows", deleteAllrows);
app.use("/api/v1/destinationAds", destinationAds);
app.use("/api/v1/destinationFilter", destinationFilter);
app.use("/api/v1/addQuote", clientQuotations);
app.use("/api/v1/payment", payment);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
