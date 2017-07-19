var mongoose = require('mongoose');
var devSchema= mongoose.Schema({
	nombre    :   String,
	paterno   :   String,
	materno   :   String,
	direccion :   {},
	celular   :   String,
	correo    :	  String,
	skill     :   [],
	fecha_registro: {type: Date, default: Date.now}
});

var Dev = mongoose.model('Dev',devSchema);

module.exports.saveDev = function (d) {
	return new Promise (function(resolve,reject){
		var dev = new Dev(d);
		dev.save(function(err,agenda){
			if (err){
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: dev});
			}
		})
	})
}

module.exports.getDev = function(){
	return new Promise(function (resolve, reject){
		Dev.find({}, function(err, agenda){
			if(err){
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: agenda});
			}
		});
	});
}
module.exports.updateDev = function (d) {
	return new Promise (function(resolve,reject){
		var devId = {_id:d._id};
		Dev.update(devId,d,function(err,agenda){

			if (err){
				console.log("update",err)
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: agenda});
			}
		})
	})
}

module.exports.removeDev = function (d) {
	return new Promise (function(resolve,reject){
		var devId = {_id:d._id};
		Dev.deleteOne(devId,function(err,agenda){
			if (err){
				console.log("remove",err)
				resolve({err: true, description: err});
			}else{
				resolve({err: false , result: agenda});
			}
		})
	})
}


