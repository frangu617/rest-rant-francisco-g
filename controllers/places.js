const router = require("express").Router();
const places = require("../models/places.js");
const db = require("../models/");

//INDEX
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch(err => {
      console.log(err);
      res.render("error404");
    })
});

//NEW
router.get("/new", (req, res) => {
  res.render(`places/new`);
});
//SHOW
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render("places/show", { place })
    })
    .catch(err => {
      console.log('err', err);
      res.render("error404");
    })
});

//CREATE
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      console.log('err', err);
      res.render("error404");
    })
});

//UPDATE
router.put(`/:id`, (req, res) => {
 
  db.Place.findById(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log(err);
      res.render("error404");
    })

})

//EDIT
router.get("/:id/edit", (req, res) => {
  db.Place.find(req.params.id._id)
    .then(() => {
      res.render("places/edit", { 
        place: req.params.id,
        
       })
    })

    .catch(err => {
      console.log(err);
      res.render("error404");
    })
})

//DELETE
router.delete("/:id", (req, res) => {
  
  db.Place.deleteOne(req.params.id._id)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err);
      res.redirect("/places");
    })
})
module.exports = router;
