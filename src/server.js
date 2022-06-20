// const express = require("express");
// require("dotenv").config();
import express from "express";
import configViewEngine from "./configs/viewEngine";

const app = express();
const port = process.env.PORT || 3000;
console.log(">>check port: ", port);
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
