const express = require("express");
const router = express.Router();
module.exports = router;
const Guest = require('../models').guestList;
const Address = require('../models').mailAddress;

//Sequelize GET route
// router.get("/currentList", (req, res) => {
//  Guest.findAll().then((guestLists) => {
//     res.render("index.ejs", {
//       guestLists: guestLists,
//     });
//   });
// });

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
         res.render("newGuest.ejs");
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
  //  include: [{ model: Guest }, { model: Address }],
  }).then((singleGuest) => {
    Address.findAll().then((allAddresses) => {
      console.log(singleGuest);
      res.render('edit.ejs', {
        guests: singleGuest,
        address: allAddresses,
      });
    });
  });
});

//delete guest
router.delete("/:lastName", (req, res) => {
  guestList.destroy({ where: { lastName: req.params.lastName } }).then(() => {
    res.redirect('/');
  });
});

 //Get - Edit guest profile button from the "home page" 
//  router.get("/editProfile", (req, res) => {
//       res.render("profile.ejs");
// });

 //EDIT PROFILE
//  router.put("/profile/:id", (req, res) => {
//    guestList.update(req.body, {
//      where: { id: req.params.guestId },
//      returning: true
//    }).then((guestList) => res.redirect(`/guestList/profile/${req.params.guestId}`));
//  });
