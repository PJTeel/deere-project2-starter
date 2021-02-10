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



//Create new
router.post("/addGuest", (req, res) => {
   Guest.create(req, res).then((newGuest) => {
     res.redirect("profile.ejs", {
        Guest: guestLists,
     });
});
 });

/*
  // Your signup
//router.get("/new", (req, res) => {
//////  res.render("new.ejs");
//});
*/
