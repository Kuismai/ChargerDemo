var express = require('express');
var router = express.Router();

const users = [
  {
    username: 'test1',
    password: 'test2',
    charges: [
      {
      date: "1.3.2020",
      duration: "30 min",
      location: "Helsinki 2",
      cost: "4,5€",
      energy: "25 kWh"
    },
    {
      date: "7.6.2020",
      duration: "45 min",
      location: "Oulu 2",
      cost: "9€",
      energy: "16,5 kWh"
    }
    ]
  },

  {
    username: 'user1',
    password: 'testing',
    charges: [
      {
      date: "12.9.2020",
      duration: "57 min",
      location: "Oulu 1",
      cost: "12,8€",
      energy: "71,25 kWh"
      },
      {
      date: "23.9.2020",
      duration: "15 min",
      location: "Tönölä",
      cost: "0€",
      energy: "5,5 kWh"
      }
    ]
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

module.exports = router;
