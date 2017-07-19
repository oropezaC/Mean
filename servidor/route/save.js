var express = require('express');
var router = express.Router();
var saveCtrl = require('../controller/save');

router.post('',function (req,res) {
	var desarrollador = req.body;
	saveCtrl.saveDev(desarrollador)
	.then(function(result){
		console.log(result);
		res.json(result);
	})
});

router.get('/getdev', function (req,res){
	saveCtrl.getDev()
	.then(function(result){
		res.json(result);
	});
})

router.put('/updatedev',function(req,res){
	var desarrollador = req.body;
	saveCtrl.updateDev(desarrollador)
	.then(function(result){
		console.log(result);
		res.json(result);
	})
})

router.post('/removedev',function(req,res){
	var desarrollador = req.body;
	saveCtrl.removeDev(desarrollador)
	.then(function(result){
		res.json(result);
	})
})

module.exports = router;