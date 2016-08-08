var express = require("express");
var User = require("./models/user");
var bodyParser = require("body-parser");
var RouterApp = require("./routers/routerApp");
var cookieSession = require("cookie-session");

var app = express();

app.use("/public", express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/app", RouterApp);

app.use(cookieSession({
 	secret: "123byunhbsdah12ub",
	resave: false,
	saveUnitialized: false
}));

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
						password: req.body.password_confirmation
					});

	user.save(function(err) {
		if(err){
			console.log(String(err));
		}else{
			res.redirect("app/profile");			
		}
	});
});

app.post("/session",function(req,res){
	User.findOne({email: req.body.email, password: req.body.password },function(err,docs){
		console.log(docs);
		if(docs){
			req.session.user_id = docs._id;
			res.redirect("/app");
		}else{
			res.redirect("/login");
		}
	});
});

app.listen(8080);
