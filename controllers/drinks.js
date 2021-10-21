const Drink = require('../models/drink');

module.exports = {
    index,
    new: newDrink,
    create,
};

function index(req, res) {
    Drink.find({}, function(err, drinks) {
        res.render('drinks/index', {drinks});
    }).sort({'createdAt': -1});
};

function newDrink(req, res) {
    res.render('drinks/new');
};

function create(req, res) {
    const drink = new Drink(req.body);
    drink.creator = req.user._id;
    drink.save(function(err) {
        if (err) return res.render('drinks/new');
        res.redirect('/drinks');
    });
};
