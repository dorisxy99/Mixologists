var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks');

/* GET users listing. */
router.get('/', drinksCtrl.index);
router.get('/new', drinksCtrl.new);
router.get('/:id', drinksCtrl.show);
router.post('/', drinksCtrl.create);
router.delete('/:id', drinksCtrl.delete);


// router.get('/:id', drinksCtrl.show);

// router.get('/:id/edit', isLoggedIn, rstrntsCtrl.edit);





// //fix this one later
// router.post('/comment_save', drinksCtrl.comment_save);

// router.post('/save', drinksCtrl.save);

module.exports = router;
