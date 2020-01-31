var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/womendb");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  dob: { type: Date, default: Date.now },
  email: String,
  bio: String,
  image: String,
  phoneNumber: Number
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
