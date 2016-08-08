var express = require("express");

var RouterApp = express.Router();

RouterApp.get("/",function(req,res){
	res.end("Homepage - test message");
});

RouterApp.get("/profile",function(req,res){
	res.end("profile - test message");
});

module.exports = RouterApp
