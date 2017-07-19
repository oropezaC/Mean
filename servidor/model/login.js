var mongoose = require('mongoose');
var userSchema= mongoose.Schema({
	usuario    :   String,
	password   :   String
});

var User = mongoose.model('User',userSchema);

module.exports.postUser = function (d) {
	return new Promise(function(resolve,reject){
		User.find({$and:[{usuario:d.usuario},{password:d.password}]},function(err,agenda){
			if(err){
				resolve({err:true, description:err});
			}else{
				resolve({err:false,result:agenda});
			}
		});
	});
}

module.exports.salir = function(d){
	return new Promise(function(resolve, reject){
		resolve({err:false});
		});
}