const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const store = require('../data/store');
const calculatePoints = require('../services/scorer');

router.post('/process', (req, res) => {
  const receipt = req.body;
  const id = uuidv4();
  const points = calculatePoints(receipt);
  store[id] = points;
  res.json({ id });
});

router.get('/:id/points', (req, res) => {
  const { id } = req.params;
  if (store[id] !== undefined) {
    res.json({ points: store[id] });
  } else {
    res.status(404).json({ message: 'No receipt found for that ID.' });
  }
});

module.exports = router;
