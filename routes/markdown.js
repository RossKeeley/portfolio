var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { pageTitle: 'Markdown Previewer | Ross Keeley Portfolio', css: 'markdown', template: 'markdown', javascript: 'markdown' });
});

module.exports = router;
