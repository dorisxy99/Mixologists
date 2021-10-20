var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks');

/* GET users listing. */
router.get('/', drinksCtrl.index);

//router.get('/new', isLoggedIn, drinksCtrl.new);

// router.get('/:id', drinksCtrl.show);

// router.get('/:id/edit', isLoggedIn, rstrntsCtrl.edit);

// router.post('/', drinksCtrl.create);

// router.delete('/:id', isLoggedIn, drinksCtrl.delete);

// //fix this one later
// router.post('/comment_save', drinksCtrl.comment_save);

// router.post('/save', drinksCtrl.save);

module.exports = router;
