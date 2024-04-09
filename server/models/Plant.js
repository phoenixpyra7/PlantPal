const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPlants` array in User.js
// I will only require the common name field to be used.
//changed all to be string due to time constraints
const plantSchema = new Schema({
  commonName: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
  },
  sunlight: {
    type: String,
  },
  directOrIndirect: {
    type: String,
  },
  water: {
    type: String,
  },
  annualOrPerennial: {
    type: String,
  },
  blooms: {
    type: String,
  },
  flowers: {
    Type: String,
  },
  deciduous: {
    Type: String,
  },
  notes: {
    Type: String,
  },
});

module.exports = plantSchema;
