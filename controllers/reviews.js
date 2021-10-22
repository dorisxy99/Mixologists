const Drink = require('../models/drink');

module.exports = {
    create,
    delete: deleteReview,
}

function create(req, res) {
    // Find the drink to embed the review within
    Drink.findById(req.params.id, function (err, drink) {

        // Add the user-centric info to req.body (the new review)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        // Push the subdoc for the review
        drink.reviews.push(req.body);
        // Always save the top-level document (not subdocs)
        drink.save(function (err) {
            res.redirect(`/drinks/${drink._id}`);
        });
    });
}

async function deleteReview(req, res) {
    const drink = await Drink.findOne({'reviews._id': req.params.id});
    const review = drink.reviews.id(req.params.id);
    // Ensure that the review was created by the logged in user
    if (!review.user.equals(req.user._id)) return res.redirect(`/drinks/${drink._id}`);
    review.remove();
    await drink.save();
    res.redirect(`/drinks/${drink._id}`);
  }