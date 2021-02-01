var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('projects/markdown-previewer-demo', { pageTitle: 'Markdown Previewer | Ross Keeley Portfolio });
});

module.exports = router;
