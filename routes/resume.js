var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Resume | Ross Keeley Portfolio', css: 'style', template: 'resume', javascript: 'main' });
});

module.exports = router;
