var express = require('express');
var router = express.Router();

const users = [
  {
    username: 'test1',
    password: 'test2'
  },
  {
    username: 'user1',
password: 'testing'
}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
