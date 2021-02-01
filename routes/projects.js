var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');


router.get('/', function(req, res, next) {
  res.render('index', { template: 'projects', projectsData });
});

module.exports = router;
