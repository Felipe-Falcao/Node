require('dotenv').config();
const consign = require('consign');
const express = require("express");

const app = express();

consign()
    .include("./api")
    .then("./config/middlewares.js")
    .then("./config/routes.js")
    .into(app);