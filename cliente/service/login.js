var angular = require('angular');
angular.module('agenda')
.service('login',['$http',function($http) {
	var url = url_base + '/login';

	// this.getUser=function(){
	// 	return $http.post(url + '/login');
	// }

	this.postUser=function(d){
		return $http.post(url+'/log',d);
	}

	this.salir = function () {
			return $http.put(url);
		}

}]);