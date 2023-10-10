const express = require('express');
const router = express.Router();
const YourDataModel = require('../models/data-model.js');

// Define your API routes here
router.get(YourDataModel, async (req, res) => {
  try {
    const data = await YourDataModel.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add more routes as needed

module.exports = router;