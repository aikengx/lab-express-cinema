const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDb => {
    //console.log(moviesFromDb)
    res.render('movies', { moviesForHBS: moviesFromDb })
  })
})


router.get('/movie/:id', (req, res, next) => {
  //console.log(req.body, req.params);
  Movie.findOne({'_id': req.params.id})
    .then(theMovie => {
      //console.log(theMovie)
      res.render('movie', { movie: theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});


module.exports = router;
