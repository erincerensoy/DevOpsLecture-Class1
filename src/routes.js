const express = require('express')
const router = express.Router();
const calculator = require('./calculator.js');


router.get('/addition', (req, res) => {
  let additionResult = calculator.add(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/substract', (req, res) => {
  let additionResult = calculator.substract(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/divide', (req, res) => {
  let additionResult = calculator.divide(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ result: "very healthy" });
});

module.exports = router