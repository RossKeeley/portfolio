var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Contact | Ross Keeley Portfolio', style: 'main', template: 'contact', javascript: 'main' });
});

module.exports = router;
