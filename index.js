const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/pet_appointment", {
useNewUrlParser: true,
useUnifiedTopology: true
});

const signSchema = {
    fname : String, 
	lname : String, 
	email : String,
	address : String,
	phone : Number,
	ophone : Number,
	pname : String,
	pgender : String,
	pbreed : String,
	ptype : String,
	dob : Date,
	extra : String,
	lastap : Date
};

const Sign_up = mongoose.model("client_details", signSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/sign_up", function(req, res){
	res.render("sign_up");
});

app.post("/sign_up", function (req, res) {
	console.log(req.body.email);
const sign_up = new Sign_up({
	 fname : req.body.fname,
	 lname : req.body.lname,
	 email : req.body.email,
	 email : req.body.address,
	 phone : req.body.phone,
	 pname : req.body.pname,
	 pgender : req.body.pgender,
	 pbreed :req.body.pbreed,
	 ptype : req.body.ptype,
	 dob : req.body.dob,
	 extra : req.body.extra,
	 lastap : req.body.lastap
});
contact.save(function (err) {
	if (err) {
		throw err;
	} else {
		res.render("sign_up");
	}
});
});

app.listen(3000, function(){
	console.log("App is running on Port 3000");
});
