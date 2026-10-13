const express = require("express");
const cors = require("cors");
const config = require("./constants/config.constant");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: config?.cors?.origin,
    credentials: config?.cors?.credentials,
    methods: config?.cors?.methods,
  }),
);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

module.exports = app;
