const express = require("express");
const moviesUtils = require("../Utils/moviesUtils");
const router = express.Router();


router.get('/:name', async (req, res) => {
  try {
    const movie = await moviesUtils.getByMovieName(req.params.name);
    res.send(movie)
  } catch (e) {
    res.send(e);
  }
});

router.get('/id/:id', async (req, res) => {
  try {
    const movie = await moviesUtils.getByMovieID(req.params.id);
    res.send(movie);
  } catch (e) {
    res.send(e);
  }
});

router.get('/search/:query', async (req, res) => {
  try {
    const movies = await moviesUtils.searchMovies(req.params.query);
    res.send(movies);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;