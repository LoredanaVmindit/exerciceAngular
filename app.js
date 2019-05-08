
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
                controller :'tableContr'
            })
            .when('/create',{
                templateUrl:'views/create.html',
                controller :'controllers/createContr'
            })
            .when('/view',{
                templateUrl:'views/view.html',
                controller:'controllers/viewContr'
            })
            .when('/edit',{
                templateUrl:'views/edit.html',
                controller: 'controllers/editContr'
            })
            .when('/delete',{
               templateUrl:'views/delete.html',
                controller:'controllers/delContr'
            });
            
    }]);
 
   
   
}());