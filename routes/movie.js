const express = require('express');
const router = express.Router();

// Models
const Movie= require('../models/Movie');

router.post('/', (req, res, next) => {
  // const { title, imdb_score, category, country, year} = req.body;

  const movie = new Movie(req.body);
  // bu arrow function tipinde yazım alttaki promise tipinde aynı işi yapıyorlar.
  /*movie.save((err, data) => {
    if(err)
      res.json(err);

    res.json({status: 1});
  });*/

  const promise = movie.save();

  promise.then((data) => {
    res.json({ status: 1});
  }).catch((err) => {
    res.js(err);
  });
});

module.exports = router;
