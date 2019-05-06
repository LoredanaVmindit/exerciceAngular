
(function () {
    var app = angular.module("app",[ 'ngRoute' ]);

    var appController = function($scope,$location){
        window.loc=$location;

    };

    app.controller("appController",["$scope","$location",appController]);
    

    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl :'table.html',
                controller :'tableController as Ctrl'
            })
            .when('/create',{
                templateUrl:'create.html',
                controller :'createContr'
            })
            .when('/view',{
                templateUrl:'view.html',
                controller:'viewContr'
            })
            .when('/edit',{
                templateUrl:'edit.html',
                controller: 'editContr'
            })
            .when('/delete',{
               templateUrl:'delete.html',
                controller:'delContr'
            });
            
    }]);
 
   
   
}());