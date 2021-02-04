var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Pomodoro Clock | Ross Keeley Portfolio', style: 'pomodoro', template: 'pomodoro', javascript: 'pomodoro' });
});

module.exports = router;
