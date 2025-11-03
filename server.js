const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// app.use(logger);

// app.listen(3000)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  console.log("Hello Here");
//   res.status(500).send("Error Occurred");
//   res.redirect("https://www.google.com");
  res.render("index", { text: "This is EJS rendering" });
//   res.status(500).json({ message: "Error Occurred" });
//   res.download("server.js");
//   res.send("Hello World");

});


const userRouter =require('./routes/users');
const e = require("express");
app.use('/users',userRouter);


