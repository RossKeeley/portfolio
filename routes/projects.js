var express = require('express');
var router = express.Router();
var jsonFile = require('../data/projects.json');
var projectsData = require('../data/projects.json');


router.get('/', function(req, res, next) {
  res.render('pages/projects', {projectsData} );
});

module.exports = router;
