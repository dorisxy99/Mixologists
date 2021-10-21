const Drink = require('../models/drink');

module.exports = {
    create,
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
            res.redirect(`/drink/${drink._id}`);
        });
    });
}