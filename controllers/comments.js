const drink = require('../models/drink');

// function create(req, res) {
//     // Find the movie to embed the review within
//     Movie.findById(req.params.id, function(err, movie) {
  
//       // Add the user-centric info to req.body (the new review)
//       req.body.user = req.user._id;
//       req.body.userName = req.user.name;
//       req.body.userAvatar = req.user.avatar;
  
//       // Push the subdoc for the review
//       movie.reviews.push(req.body);
//       // Always save the top-level document (not subdocs)
//       movie.save(function(err) {
//         res.redirect(`/movies/${movie._id}`);
//       });
//     });
//   }