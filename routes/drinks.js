var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks');

/* GET users listing. */
router.get('/', drinksCtrl.index);
router.get('/new', drinksCtrl.new);
router.post('/new', drinksCtrl.create);

router.post('/', drinksCtrl.create);

// router.get('/:id', drinksCtrl.show);

// router.get('/:id/edit', isLoggedIn, rstrntsCtrl.edit);



// router.delete('/:id', isLoggedIn, drinksCtrl.delete);

// //fix this one later
// router.post('/comment_save', drinksCtrl.comment_save);

// router.post('/save', drinksCtrl.save);

module.exports = router;
