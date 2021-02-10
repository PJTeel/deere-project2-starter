const express = require("express");
const router = express.Router();
module.exports = router;
const Guest = require('../models').Guestlist;
const Address = require('../models').Mailaddress;

//Sequelize GET route
router.get("/currentList", (req, res) => {
 Guest.findAll().then((guestLists) => {
    res.render("index.ejs", {
      guestLists: guestLists,
    });
  });
});



//Create new guest
router.get("/addGuest", (req, res) => {
        res.render("signup.ejs");
 });

/*
  // Your signup
//router.get("/new", (req, res) => {
//////  res.render("new.ejs");
//});
*/
