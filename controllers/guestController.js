const express = require("express");
const router = express.Router();
module.exports = router;
const Guest = require('../models').guestList;
const Address = require('../models').mailAddress;

//Add Address info to the mailAdress model from the "Enter Guest Address Info" page - /guestlist/addAddress
router.post('/', (req, res) => {
  Address.create(req.body).then(() => {
    res.redirect('/');
  });
});

//Add new guest info to the guestAddress model from the "Enter Guest Info" page - /guestlist/addGuest
router.post('/newguest', (req, res) => {
  Guest.create(req.body).then(() => {
    res.redirect('/');
  });
});

//Get -  localhost:3000 - Add Address button from the "home page" goes to signup page to create new address 
router.get("/addAddress", (req, res) => {
  res.render("newAddress.ejs");
});

 //Get -  localhost:3000 - Add Guest Button from the "home page" goes to signup page to create new guest 
router.get("/addGuest", (req, res) => {
  Address.findAll().then((address) => {
    res.render("newGuest.ejs", {
      mailAddress: address,
    });
  })
});


//Get -  localhost:3000Guest list button on "home page" goes to "Guest Index List" 
router.get("/displayList", (req, res) => {
  Guest.findAll().then((guests) => {
    res.render('index.ejs', {
      guests: guests,
    });
  });
});


//Show guest profile page
router.get("/:id", (req, res) => {
  Guest.findByPk(req.params.id, {
  }).then((singleGuest) => {
    Address.findAll().then((allAddresses) => {
      console.log(singleGuest);
      res.render('edit.ejs', {
        guests: singleGuest, ///object name "guests" is referenced in the edit view
        address: allAddresses,
      });
    });
  });
});

//delete guest
router.delete("/:id", (req, res) => {
  Guest.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect('/');
  });
});


 //EDIT PROFILE
router.put("/:id", (req, res) => {
  console.log("testbody", req.body)
  if (req.body.inviteSent === undefined) {
    req.body.inviteSent = false;
  } else {
    req.body.inviteSent = true
  }
  if (req.body.rsvpRec === undefined) {
    req.body.rsvpRec = false;
  } else {
    req.body.rsvpRec = true
  }
  if (req.body.weddingThanks === undefined) {
    req.body.weddingThanks = false;
  } else {
    req.body.weddingThanks = true
  }
  if (req.body.showerThanks === undefined) {
    req.body.showerThanks = false;
  } else {
    req.body.showerThanks = true
  };
  Guest.update(req.body, {
    where: { id: req.params.id },
    returning: true
  }).then((guest) => res.redirect('/'));
});