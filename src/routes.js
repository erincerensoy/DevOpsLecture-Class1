const express = require('express')
const router = express.Router();
const calculator = require('./calculator.js');


router.get('/add', (req, res) => {
  let additionResult = calculator.add(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/substract', (req, res) => {
  let additionResult = calculator.substract(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/', (req, res) => {
  let additionResult = calculator.divide(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/', (req, res) => {
  let additionResult = calculator.multiply(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

add = (a, b) => {
  return a + b;
}

substract = (a, b) => {
  return a - b;
}

module.exports = router