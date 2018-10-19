var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'O SEXTO TEM UM VINAGRETE DE 5KG DE TOMATE' });
});

module.exports = router;
