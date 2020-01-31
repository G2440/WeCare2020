var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/womendb");
var guideSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  password: String,
  location: String
});

// var Guide= mongoose.model("Guide", guideSchema);
module.exports = mongoose.model("Guide", guideSchema);
