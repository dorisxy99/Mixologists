var express = require('express');
var router = express.Router();
const drinksCtrl = require('../controllers/drinks');

/* GET users listing. */
router.get('/', drinksCtrl.index);
router.get('/new', drinksCtrl.new);
router.get('/:id', drinksCtrl.show);
router.post('/', drinksCtrl.create);
router.delete('/:id', drinksCtrl.delete);
router.get('/:id/edit', drinksCtrl.edit);
router.put('/:id', drinksCtrl.update);


module.exports = router;
