const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.post('/', movieController.createMovie);

router.get('/', movieController.getAllMovies);

router.get('/:movieId', movieController.getMovieById);

router.put('/:movieId', movieController.updateMovie);

router.delete('/:movieId', movieController.deleteMovie);

module.exports = router;
