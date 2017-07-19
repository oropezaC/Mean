conn = null;
// sql = require('mssql');
mongoose = require('mongoose');
Promise = require('bluebird');
var fs = require('fs');
// var sql_cred = JSON.parse(fs.readFileSync(__dirname + '/sql_cred'));


module.exports.start = function(){
	return new Promise(function(resolve, reject){
		var p1 = new Promise(function(resolve, reject){
			mongoose.connect('mongodb://localhost/agenda');
			var db = mongoose.connection;
			db.once('open' , function(){
				console.log("conectados con mongodb");
				resolve();
				});
			// resolve();

			});

			var p2 = new Promise(function(resolve, reject){
			/*conn = new sql.Connection(sql_cred, function (err){
				if(err){
					console.log("Ocurrio un error en el servidor");
					reject();
				}else{
					console.log("conectado mssql");
					resolve();
				}
			});*/
			resolve();
		});


			Promise.settle([p1,p2])
			.then(function(results){
				resolve();
			});
		});
};
