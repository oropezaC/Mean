var angular = require('angular');
var moment = require('moment');
require('../service/login')
angular.module('agenda')
.controller('loginCtrl', ['$scope','login', function ($scope,login) {

	$scope.log=function(d){
		if (d==null || d == undefined) {
			$scope.usernot=true;
			$scope.passnot=true;
		}else if(d.usuario==null || d.usuario == undefined) {
			$scope.usernot=true;

		}else if(d.password==null || d.password == undefined) {
			$scope.passnot=true;
			$scope.out=false;
		}else{
			login.postUser(d)
			.then(function(result){
				if (result.data.err==true) {
					$scope.out=true;
				}else{
					document.location.href=  url_base + "/home";
				}
			})
		}
	}

	$scope.logout = function () {
    login.salir()
      .success(function(result){
        if(!result.err){
          document.location.href=  url_base ;
        }
      });
  }

}]);