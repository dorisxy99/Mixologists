var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('landing');
});

/* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('home');
// });

module.exports = router;

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/drinks',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;