var angular = require('angular');

url_base = 'http://localhost:3020';

angular.module('agenda', [])
.config(['$interpolateProvider', function($interpolateProvider){
	$interpolateProvider.startSymbol('{[');
	$interpolateProvider.endSymbol(']}');
}]);
var url = url_base;
require('./controller/desarrollador')
require('./controller/login')