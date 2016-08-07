var express = require("express");

var app = express();

app.use("/public", express.static('public'));

app.set("view engine", "pug");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	res.render("login");
})

app.get("/signup",function(req,res){
	res.render("signup");
})

app.listen(8080);
