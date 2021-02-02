var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Calculator | Ross Keeley Portfolio', style: 'calculator', template: 'calculator', javascript: 'calculator' });
});

module.exports = router;
