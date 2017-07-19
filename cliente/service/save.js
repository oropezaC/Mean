var angular = require('angular');
angular.module('agenda')
.service('save',['$http',function($http) {
	var url = url_base + '/save';

	this.saveDev=function(d){
		return $http.post(url ,d);
	}

	this.getdev=function(d){
		return $http.get(url +'/getdev');
	}

	this.updateDev=function(d){
		return $http.put(url + '/updatedev',d)
	}

	this.removeDev=function(d){
		return $http.post(url + '/removedev',d)
	}

}]);