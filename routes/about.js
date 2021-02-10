var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'About | Ross Keeley Portfolio', style: 'about', template: 'about', javascript: 'index' });
});

module.exports = router;
