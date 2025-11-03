const express = require("express");
const router = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use("/api/users", router);

module.exports = app;