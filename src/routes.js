const express = require('express')
const router = express.Router();
const calculator = require('./calculator.js');

router.get('/add', (req, res) => {
  let additionResult = calculator.add(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/add', (req, res) => {
  let additionResult = calculator.add(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

module.exports = router