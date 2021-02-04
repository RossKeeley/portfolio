var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');


router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Projects | Ross Keeley Portfolio', style: 'main', template: 'projects', projectsData, javascript: 'main' });
});

router.get('/:projectId', (req, res) => {
  let projectName = req.params.projectId;
  res.render('index', { pageTitle: projectName + ' | Ross Keeley Portfolio', style: projectName, template: projectName, javascript: projectName });
});

module.exports = router;
