const Drink = require('../models/drink');

module.exports = {
    index,
    new: newDrink,
    create,
    show,
    edit,
    delete: deleteDrink,
    update,
};

function index(req, res) {
    Drink.find({}).sort({'createdAt': -1})
        .populate('user')
        .exec(function(err, drinks) {
            res.render('drinks/index', {drinks});
        });
}

function newDrink(req, res) {
    res.render('drinks/new');
}

function create(req, res) {
    for (let key in req.body) {
        if (!req.body[key]) delete req.body[key];
    }
    const drink = new Drink(req.body);
    drink.user = req.user._id;
    drink.save(function(err) {
        if (err) return res.render('drinks/new');
        res.redirect('/drinks');
    });
}

function show(req, res) {
    Drink.findById(req.params.id).populate('user')
        .exec(function(err, drink) {
            res.render('drinks/show', {drink});
        });
}

function edit(req, res) {
    Drink.findById(req.params.id).populate('user')
        .exec(function(err, drink) {
            res.render('drinks/edit', {drink});
        });
}

function deleteDrink(req, res) {
    Drink.findOneAndDelete({_id: req.params.id, user: req.user._id}, function(err) {
        res.redirect('/drinks');
    });
}

function update(req, res) {
    Drink.findOneAndUpdate(
      {_id: req.params.id, user: req.user._id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, drink) {
        if (err || !drink) return res.redirect('/drinks');
        res.redirect(`/drinks/${drink._id}`);
      }
    );
  }
  