var express = require('express');
var router = express.Router();
/* GET newRout listing. */

router.get('/', function(req, res, next) {
    res.send("halp");
/*res.send(locations = [
    {
      location: 'Helsinki 1',
      speed: 'fast',
      status: 'in use',
      price: 'premium'
    },
    {
      location: 'Helsinki 2',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Helsinki 3',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Espoo 1',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Espoo 2',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Oulu 1',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Oulu 2',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Tampere',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Turku',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Rovaniemi',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Jyväskylä',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Lohtaja',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Kotka',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Kajaani',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Kuopio',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Kokkola',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Tornio',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Vilppula',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    },
    {
      location: 'Peräkylä',
      speed: 'slow',
      status: 'free',
      price: 'free'
    },
    {
      location: 'Tönölä',
      speed: 'fast',
      status: 'free',
      price: 'premium'
    }
  ]);*/
});
module.exports = router;