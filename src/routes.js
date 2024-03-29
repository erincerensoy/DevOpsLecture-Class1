const express = require('express')
const router = express.Router();
const calculator = require('./calculator.js');


router.get('/addition', (req, res) => {
  let additionResult = calculator.add(parseInt(req.query.a), parseInt(req.query.b));
  res.status(200).json({ result: additionResult });
});

router.get('/healthcheck', (req, res) => {
  res.status(200).json({ result: "very very healthy" });
});

module.exports = router