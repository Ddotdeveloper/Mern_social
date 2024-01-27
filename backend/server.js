const express = require("express");
const app = require("./app");
require('dotenv').config();

const { connectDatabase } = require("./config/database");

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(` hello world ${process.env.PORT}`);
});
