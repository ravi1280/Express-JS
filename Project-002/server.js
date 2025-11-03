require("dotenv").config();

const express = require("express");
const router = require("./src/routes/userRoutes.js");
const app = express();

app.use(express.json());
app.use("/api/users", router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅🔥`));
