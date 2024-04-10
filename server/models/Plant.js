const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `plants` array in User.js
// I will only require the common name field to be used.
//changed all to be string due to time constraints
const plantSchema = new Schema({
  commonName: {
    type: String,
    required: true,
  },
  scientificName: {
  type: String,
   required:false
  },
  sunlight:  {
  type: String,
  required:false
  },
  directOrIndirect: {
  type: String,
  required:false
  },
  water: {
  type: String,
  required:false
  },
  annualOrPerennial: {
  type: String,
  required:false
  },
  blooms: {
  type: String,
  required:false
  },
  flowers: {
  type: String,
  required:false
  },
  deciduous: {
  type: String,
  required:false
  },
  notes: {
  type: String,
  required:false,
  }
});

module.exports = plantSchema;
