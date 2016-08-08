var mongoose = require("mongoose");

var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/bow");

var userSchema = new Schema({
	email: String,
	userName: String,
	password: String

});

var User = mongoose.model("User", userSchema)

module.exports =  User;
