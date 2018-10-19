var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.locals.connection.query('SELECT * FROM movies', function(error, movies, fields) {
    if (error) throw error;
    res.send(movies);
  });
});

router.post('/', function(req, res, next) {
  var movie = {
    title: req.body.title,
    grade: req.body.grade,
    cover: req.body.cover,
    year: req.body.year,
  };
  res.locals.connection.query('INSERT INTO movies SET ?', movie, function(error, results, fields) {
    if (error) throw error;
    res.send({message: 'Filme adicionado com sucesso'});
  });
});

module.exports = router;
