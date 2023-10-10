const mongoose = require('mongoose');

const YourDataSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  description: String,
  // ...
});

const YourDataModel = mongoose.model('YourData', YourDataSchema);

module.exports = YourDataModel;