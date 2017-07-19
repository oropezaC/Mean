var express = require('express');
var router = express.Router();

router.get('', function(req, res) {
	if(req.session.logged){		
	console.log(req.session);
		res.render('registro', {usuario: req.session.usuario, id: req.session.id, logged: req.session.logged});
  }else{
  	console.log("sin session")
  	res.render('acceso')
  }
});

router.get('/registro', function(req, res) {
	if(req.session.logged){		
	console.log(req.session);
		res.render('registro', {usuario: req.session.usuario, id: req.session.id, logged: req.session.logged});
  }else{
  	console.log("sin session")
  	res.render('acceso')
  }
	
});

router.get('/desarrolladores', function(req, res) {
	if(req.session.logged){		
	console.log(req.session);
		res.render('desarrolladores', {usuario: req.session.usuario, id: req.session.id, logged: req.session.logged});
  }else{
  	console.log("sin session")
  	res.render('acceso')
  }
});

router.get('/home', function(req, res) {
	if(req.session.logged){		
	console.log(req.session);
		res.render('home', {usuario: req.session.usuario, id: req.session.id, logged: req.session.logged});
  }else{
  	console.log("sin session")
  	res.render('acceso')
  }
});

module.exports = router;