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

//new comment
router.get("/:id/comment/new", (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    console.log("hello from new comment land!")
      res.render('places/rants', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

//SHOW
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      console.log(place.comments)
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
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: ';
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }

        res.render('places/new', { formData: req.body, message })
      }
      else {

        res.render("error404");
      }
    })
});

//CREATE COMMENTS
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if(req.body.rant === 'on'){
    req.body.rant = true
  }
  else {
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
  .then(place => {
    console.log("step 1 success")
      db.Comment.create(req.body)
      .then(comment => {
        console.log("step 2 success")
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              console.log("step 3 success")
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})

//UPDATE
router.put(`/:id`, (req, res) => {

  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedPlace) => {
      console.log(updatedPlace);
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log(err);
      res.render("error404");
    })

})

//EDIT
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((foundPlace) => {
      res.render("places/edit", {
        place: foundPlace,

      })
    })

    .catch(err => {
      console.log(err);
      res.render("error404");
    })
})
//edit comments
router.get(`/:id/comment/:commentId/edit`, (req, res) => {

  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.findById(req.params.commentId)
      .then(comment => {
          res.render('places/editcomment', { place, comment })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})
//DELETE
router.delete("/:id", (req, res) => {

  db.Place.findByIdAndDelete(req.params.id)
    .then((deletedPlace) => {
      res.status(303).redirect('/places')
    })
    .catch(err => {
      console.log(err);
      res.redirect("/places");
    })
})

//DELETE COMMENT
router.delete("/:id/comment/:cid", (req, res) =>{
  db.Comment.findByIdAndDelete(req.params.cid)
  .then((deletedComment) => {
    res.status(303).redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    res.redirect("/places")
  })
})
module.exports = router;
