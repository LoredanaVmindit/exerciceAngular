
(function () {
    var app = angular.module("app",[ 'ngRoute' ]);

    var appController = function($scope){


    };

    app.controller("appController",["$scope",appController]);
    

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl :'table.html',
                controller :'tableController'
            })
            .when('/create',{
                templateUrl:'create.html'
            });
            
    }]);
 
   
   
}());