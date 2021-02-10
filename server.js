require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");



app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// HOMEPAGE
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(express.urlencoded({ extended: true })); //parsing data so it can be rendered
app.use("/guestlist", require("./controllers/guestController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
 