const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  _id: {
    type:Number
  },
  titre: { 
    type: String, 
    required: true
  },
  description: { 
    type: String, 
    required: true
  },
  titre1: {
    type: String
  },
  description1: {
    type: String
  },
  id_user: {
    type: Number,   
    required: true
  },
  photo: { 
    type: String ,   
    required: true
  },
  valid: {
    type: Boolean
  }

},{ timestamps: true });

module.exports = mongoose.model("publication", UserSchema);
