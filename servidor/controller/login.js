var LoginModel = require('../model/login');

// module.exports.getUser = function () {
// 	return new Promise(function(resolve,reject){
// 		LoginModel.getUser()
// 		.then(function(result){
// 			resolve(!result.err ? result.result : result)
// 		})
// 	})
// }

module.exports.postUser = function (d) {
	return new Promise(function(resolve,reject){
		LoginModel.postUser(d)
		.then(function(result){
			resolve(!result.err ? result.result : result)
		})
	})
}

module.exports.salir = function(){
	return new Promise(function(resolve, reject){
		LoginModel.salir()
		.then(function (result) {
			resolve(result);
		});
	});
}