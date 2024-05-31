const router = require('express').Router();
const db = require('../models');

// Get all places
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places });
    })
    .catch(err => {
      console.log(err);
      res.render('error404');
    });
});

// Create a new place
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      if (err && err.name === 'ValidationError') {
        let message = 'Validation Error: ';
        for (let field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        res.render('places/new', { message });
      } else {
        res.render('error404');
      }
    });
});

// Form to create a new place
router.get('/new', (req, res) => {
  res.render('places/new');
});

// Show a single place
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
      if (!place) {
        return res.render('error404');
      }
      res.render('places/show', { place });
    })
    .catch(err => {
      console.log('err', err);
      res.render('error404');
    });
});

// Form to edit a place
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      if (!place) {
        return res.render('error404');
      }
      res.render('places/edit', { place });
    })
    .catch(err => {
      console.log('err', err);
      res.render('error404');
    });
});

// Update a place
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

// Delete a place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
      if (!place) {
        return res.render('error404');
      }
      res.redirect('/places');
    })
    .catch(err => {
      console.log('err', err);
      res.render('error404');
    });
});

// Add a comment to a place
router.post('/:id/comment', (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then(place => {
      if (!place) {
        return res.render('error404');
      }
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id);
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`);
            });
        })
        .catch(err => {
          res.render('error404');
        });
    })
    .catch(err => {
      res.render('error404');
    });
});

// Delete a comment from a place
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          console.log('Success')
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

// Placeholder for adding a rant to a place
router.post('/:id/rant', (req, res) => {
  console.log(req.body);
  req.body.rant = req.body.rant === 'on' ? true : false;

  db.Place.findById(req.params.id)
    .then(place => {
      if (!place) {
        return res.render('error404');
      }
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id);
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`);
            });
        })
        .catch(err => {
          console.error(err)
          res.render('error404');
        });
    })
    .catch(err => {
      console.error(err)
      res.render('error404');
    });
});

// Placeholder for deleting a rant from a place
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub');
});

module.exports = router;