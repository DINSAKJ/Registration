var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/registration', function(req, res, next) {
  res.send(req);
});

module.exports = router;
