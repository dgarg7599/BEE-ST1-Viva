const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });


router.post('/', reviewController.addReview);


router.get('/', reviewController.getAllReviews);


router.put('/:reviewId', reviewController.updateReview);


router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;
