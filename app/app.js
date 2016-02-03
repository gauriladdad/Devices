"use strict";

var deviceManagement = angular.module('deviceManagement', []);

// setup the service factory to create our items. Should retrieve from the server side db
deviceApp.factory('Devices', function(){
    var items = {};

    items.query = function(){
		var promise = $http.get('http://localhost:8080/devices')
						.success(
							function(data) { 
							console.log(data)
						})	
						.error(
							function(error, status) {
								console.log("error retrieving data: " + status);
						});
    }
    return items;
});