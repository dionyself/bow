var express = require("express");
var User = require("./models/user");
var bodyParser = require("body-parser");
var RouterApp = require("./routers/routerApp");

var app = express();

app.use("/public", express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/app", RouterApp);

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

app.post("/users",function(req,res){
	var user = new User({email: req.body.email,
						userName: req.body.password,
						password: req.body.password_confirmation
					});

	user.save(function(err) {
		if(err){
			console.log(String(err));
		}
		res.render("app/profile");
	});

});

app.listen(8080);
