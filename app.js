const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://gargdivyansh7599:xHEgqIEKb2aaEMVW@cluster0.h5vbry9.mongodb.net/CRUD?retryWrites=true&w=majority"
, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Connected"));

// Use movie and review routes
app.use('/api/movies', movieRoutes);
app.use('/api/movies/:movieId/reviews', reviewRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
