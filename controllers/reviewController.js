const Review = require('../models/reviewModel');

exports.addReview = async (req, res) => {
  try {
    const { movieId } = req.params;
    const review = await Review.create({ ...req.body, movieId });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllReviews = async (req, res) => {
  try {
    const { movieId } = req.params;
    const { page = 1, pageSize = 10 } = req.query;
    const reviews = await Review.find({ movieId })
      .skip((page - 1) * pageSize)
      .limit(Number(pageSize));
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { movieId, reviewId } = req.params;
    const review = await Review.findOneAndUpdate({ _id: reviewId, movieId }, req.body, { new: true });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const { movieId, reviewId } = req.params;
    const review = await Review.findOneAndDelete({ _id: reviewId, movieId });
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
