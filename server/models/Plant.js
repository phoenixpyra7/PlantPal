const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedPlants` array in User.js
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
    type: Boolean,
  },
  water: {
    type: String,
  },
  annualOrPerennial: {
    type: Boolean,
  },
  blooms: {
    type: String,
  },
  flowers: {
    Type: Boolean,
  },
  deciduous: {
    Type: Boolean,
  },
  notes: {
    Type: String,
  },
});

module.exports = plantSchema;
