var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jay Galante Realty' });
});
/* GET listings page. */
router.get('/listings', function(req, res, next) {
  res.render('listings', { title: 'Express' });
});

//* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('listings', { title: 'Express' });
});

//* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});


module.exports = router;
