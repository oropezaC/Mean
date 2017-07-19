var express = require('express');
var router = express.Router();
var loginCtrl = require('../controller/login')


// router.get('/user',function (req,res) {
// 	loginCtrl.getUser()
// 	.then(function (result) {
// 		res.json(result);
// 	})	
// })

router.post('/log',function (req,res) {
	var user = req.body;
	loginCtrl.postUser(user)
	.then(function (result) {
		console.log("sesionnnnn",result.length)
		var usr = result[0];
			if(result.length >= 1){
			req.session.logged = true;
			req.session.usuario = usr.usuario;
			req.session.id = usr._id;
			console.log('session');
			res.json(result);
			}else{
				res.json({err: true, description: 'Usuario Invalido'});
			}
		
	})	
})

router.put('', function (req, res){
	loginCtrl.salir()
	.then(function(result){
		if(!result.err){
			req.session.logged = false;
			req.session.id = null;
		}
		res.json(result);
	});
});



module.exports = router;