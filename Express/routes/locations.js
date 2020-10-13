var express = require('express');
var router = express.Router();


const locations = [
    {
      location: 'Helsinki 1',
      speed: 'fast',
      status: 'in use',
      price: '0.18€/kWh',
      code: 'HKI1',
      lat: '60.347',
      long: '24.893'
    },
    {
      location: 'Helsinki 2',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'HKI2',
      lat: '60.203',
      long: '24.835'
    },
    {
      location: 'Helsinki 3',
      speed: 'slow',
      status: 'free',
      price: '0.20€/min',
      code: 'HKI3',
      lat: '60.192',
      long: '24.946'
    },
    {
      location: 'Espoo 1',
      speed: 'fast',
      status: 'in use',
      price: '0.18€/kWh',
      code: 'ESP1',
      lat: '60.307',
      long: '24.655'
    },
    {
      location: 'Espoo 2',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'ESP2',
      lat: '60.205',
      long: '24.656'
    },
    {
      location: 'Oulu 1',
      speed: 'fast',
      status: 'in use',
      price: '0.18€/kWh',
      code: 'OUL1',
      lat: '65.011',
      long: '25.467'
    },
    {
      location: 'Oulu 2',
      speed: 'slow',
      status: 'free',
      price: '0.20€/min',
      code: 'OUL2',
      lat: '65.012',
      long: '25.468'
    },
    {
      location: 'Tampere',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'TAMP',
      lat: '61.499',
      long: '23.787'
    },
    {
      location: 'Turku',
      speed: 'fast',
      status: 'in use',
      price: '0.18€/kWh',
      code: 'TURK',
      lat: '60.455',
      long: '22.265'
    },
    {
      location: 'Rovaniemi',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'ROVA',
      lat: '66.503',
      long: '25.727'
    },
    {
      location: 'Jyväskylä',
      speed: 'fast',
      status: 'in use',
      price: '0.18€/kWh',
      code: 'JYVA',
      lat: '62.241',
      long: '25.721'
    },
    {
      location: 'Lohtaja',
      speed: 'slow',
      status: 'free',
      price: '0.20€/min',
      code: 'LOHT',
      lat: '64.025',
      long: '23.505'
    },
    {
      location: 'Kotka',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'KOTK',
      lat: '60.480',
      long: '26.932'
    },
    {
      location: 'Kajaani',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'KAJA',
      lat: '64.227',
      long: '27.728'
    },
    {
      location: 'Kuopio',
      speed: 'fast',
      status: 'in use',
      price: '0.18€/kWh',
      code: 'KUOP',
      lat: '62.892',
      long: '27.677'
    },
    {
      location: 'Kokkola',
      speed: 'fast',
      status: 'free',
      price: '0.18€/kWh',
      code: 'KOKK',
      lat: '63.839',
      long: '23.131'
    },
    {
      location: 'Tornio',
      speed: 'slow',
      status: 'in use',
      price: '0.20€/min',
      code: 'TORN',
      lat: '65.843',
      long: '24.147'
    },
    {
      location: 'Vilppula',
      speed: 'slow',
      status: 'free',
      price: 'free',
      code: 'VILP',
      lat: '62.021',
      long: '24.505'
    },
    {
      location: 'Peräkylä',
      speed: 'slow',
      status: 'in use',
      price: 'free',
      code: 'PERA',
      lat: '61.317',
      long: '21.667'
    },
    {
      location: 'Tönölä',
      speed: 'slow',
      status: 'free',
      price: 'free',
      code: 'TONO',
      lat: '62.307',
      long: '25.204'
    }
  ]

router.get('/', function(req, res, next) {
  res.send(locations);
});

module.exports = router;