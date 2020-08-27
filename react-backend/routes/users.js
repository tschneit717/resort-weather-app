var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([{
    id: 1,
    username: "dummyAcc1"
  }, {
    id: 2,
    username: "otherDummy"
  }]);
});

module.exports = router;
