const consign = require('consign');
const express = require("express");

const app = express();

consign()
    .include("./api")
    .then("./config/routes.js")
    .into(app);