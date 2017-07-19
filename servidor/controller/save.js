var SaveModel = require('../model/save');

module.exports.saveDev =function (data) {
	var dev = {};
	return new Promise(function(resolve, reject){
		dev.nombre    = data.nombre;
		dev.paterno   = data.paterno;
		dev.materno   = data.materno;
		dev.celular   = data.celular;
		dev.correo    = data.correo;
		dev.direccion = {
			calle: data.calle,
			colonia: data.colonia,
			delegacion : data.delegacion,
			cp :data.cp
		};
		dev.skill     = data.skill;
		SaveModel.saveDev(dev)
		.then(function(result){
			resolve(result);
		});
	});
}

module.exports.getDev = function(){
	return new Promise(function(resolve, reject){
		SaveModel.getDev()
		.then(function (result) {
			resolve(!result.err ? result.result : result);
		});
	});
}

module.exports.updateDev=function(d){
	return new Promise(function(resolve,reject){
		SaveModel.updateDev(d)
		.then(function(result){
			resolve(!result.err ? result.result : result);
		})
	})
}


module.exports.removeDev=function(d){
	return new Promise(function(resolve,reject){
		console.log("controller",d)
		SaveModel.removeDev(d)
		.then(function(result){
			resolve(!result.err ? result.result : result);
		})
	})
}